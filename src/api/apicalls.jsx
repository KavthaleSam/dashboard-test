import { Octokit } from "https://cdn.skypack.dev/@octokit/core";

// const octokit = new Octokit();

class User {
    constructor(username) {
        this.username = username;

    }
    init = async () => {
        let data = await this.getUser(this.username);
        this.id = data.id;
        this.name = data.name;
        this.location = data.location;
        this.avatar_url = data.avatar_url;
        this.html_url = data.html_url;
        this.followers = data.followers;
        this.following = data.following;
        this.bio = data.bio;
        this.skills = [];
        data = await this.getRepos(this.username);
        this.repos = data.map(repo => {
            if (repo.language ) {
                if (!this.skills.includes(repo.language)) {
                    this.skills.push(repo.language);
                }
            }
            return {
                name: repo.name,
                description: repo.description,
                url: repo.html_url,
                owner: repo.owner.login,
                stars: repo.stargazers_count,
                forks: repo.forks,
                language: repo.language
            };
        })
        return this;
    }
    getUser = async (username) => {
        const octokit = new Octokit({
            // auth: "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",
        });
        const response = await octokit.request("GET /users/" + username);
        return response.data;
    };
    getRepos = async (username) => {
        const octokit = new Octokit({
            // auth: "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",
        });
        const response = await octokit.request(
            "GET /users/" + username + "/repos",
            {
                per_page: 100,
            }
        );
        console.log(response.data);
        return response.data;
    };

    static getAllUsers = async (usernames) => {
        const users = [];
        for (let i = 0; i < usernames.length; i++) {
            const user = new User(usernames[i]);
            await user.init();
            users.push(user);
        }
        return users;
    }
}

export { User };
