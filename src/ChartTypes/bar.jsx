import React from "react";
import * as d3 from "d3";
import { useD3 } from "../hooks/useD3";

const BarChart = () => {
    const ref = useD3((svg) => {
        const data = [
            { id: "d1", value: 10, region: "north" },
            { id: "d2", value: 20, region: "south" },
            { id: "d3", value: 30, region: "east" },
            { id: "d4", value: 40, region: "west" },
            { id: "d5", value: 50, region: "north east" },
        ];
        var dataset = [
            [0, 10, 20, 10, 30, 10, 30],
            [10, 40, 50, 50, 10],
            [0, 10, 20, 10, 30, 10, 30],
            [10, 40, 50, 50, 10],
            
        ];
        svg.style("border", "solid 1px black");
        var g = svg.selectAll("g");
        var g1 = g.data(dataset).enter().append("g");
        g1.attr("transform", function (d, i) {
            return "translate(" + (i * 12 + 2) + ",0)";
        });
        var rect = g1.selectAll("rect");
        var rect_each = rect
            .data(function (d) {
                return d;
            })
            .enter()
            .append("rect");
        rect_each
            .style("fill", function (d) {
                var p = Math.floor((80 * (50 - d)) / 50);
                return "hsl(120,80%," + (p + 15) + "%)";
            })
            .attr("width", "10")
            .attr("height", "10")
            .attr("transform", function (d, i) {
                return "translate(0," + (i * 12 + 2) + ")";
            })
            .text(function (d) {
                return d;
            })
            .on("mouseover", function (d) {
                d3.select(this).transition().style("stroke", "black");
            })
            .on("mouseout", function (d, i) {
                d3.select(this).transition().style("stroke", "");
            });
    }, []);
    return <svg width="800" height="86" ref={ref}></svg>;
};

export default BarChart;
