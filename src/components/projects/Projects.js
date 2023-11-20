import React, { Component } from "react";
import Dot from "./Dot";
import Project from "./Project";

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      random: t => Math.random() * t,
      binRandom: f => Math.random() < f,
      myArray: [],
      featuredArray: ["foodifox", "movingMindz", "stemblr", "pikcha", "sorted"],
      selectedProject: "",
    };
    this.container = React.createRef();
  }

  changeProject(project) {
    this.setState({
      selectedProject: project,
    });
  }

  draw() {
    let dots = this.state.myArray;
    for (let dot of this.state.myArray) {
      dot.p.x += dot.v.x;
      dot.p.y += dot.v.y;
      if (
        dot.p.x + 200 > this.container.current.getBoundingClientRect().width ||
        dot.p.x < 0
      )
        dot.v.x *= -1;
      if (
        dot.p.y + 200 > this.container.current.getBoundingClientRect().height ||
        dot.p.y < 0
      )
        dot.v.y *= -1;

      for (let other of dots) {
        if (dot !== other) {
          var dx = dot.p.x + 100 - (other.p.x + 100);
          var dy = dot.p.y + 100 - (other.p.y + 100);
          var distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            if (dot.p.x > other.p.x == dot.v.x < other.v.x) {
              var swap = dot.v.x;
              dot.v.x = other.v.x;
              other.v.x = swap;
            }
            if (dot.p.y > other.p.y == dot.v.y < other.v.y) {
              var swap = dot.v.y;
              dot.v.y = other.v.y;
              other.v.y = swap;
            }
          }
        }
      }
      // Check if outside container
      let shouldRedraw = false;
      if (
        dot.p.x + 185 > this.container.current.getBoundingClientRect().width ||
        dot.p.x < -15
      )
        shouldRedraw = true;
      if (
        dot.p.y + 185 > this.container.current.getBoundingClientRect().height ||
        dot.p.y < -15
      )
        shouldRedraw = true;

      if (shouldRedraw) {
        dot.p.x = this.state.random(
          this.container.current.getBoundingClientRect().width - 400
        );
        dot.p.y = this.state.random(
          this.container.current.getBoundingClientRect().height - 400
        );
      }
    }

    this.setState({
      myArray: dots,
    });

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        myArray: new Array(4).fill().map((p, index) => {
          return {
            id: index,
            type: this.state.featuredArray[index],
            p: {
              x: this.state.random(
                this.container.current.getBoundingClientRect().width - 400
              ),
              y: this.state.random(
                this.container.current.getBoundingClientRect().height - 400
              ),
            },
            v: {
              x: this.state.random(0.7) * (this.state.binRandom(0.7) ? 2 : -2),
              y: this.state.random(0.7) * (this.state.binRandom(0.7) ? 2 : -2),
            },
            s: 30,
          };
        }),
      });
    }, 1000);

    requestAnimationFrame(() => {
      this.draw();
    });
  }

  render() {
    return (
      <div ref={this.container} className="projects-container">
        {this.state.myArray.map((dot, index) => (
          <Dot
            key={index}
            x={dot.p.x}
            y={dot.p.y}
            type={dot.type}
            changeProject={type => this.changeProject(type)}
          />
        ))}
        <Project
          project={this.state.selectedProject}
          changeProject={type => this.changeProject(type)}
        />
      </div>
    );
  }
}
