class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide Details" : "Show Details"}
        </button>
        {this.state.visibility && <p>These are the details.</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// let showText = false;

// const onToggleClick = () => {
//   console.log("Toggle clicked");
//   showText = !showText;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <button onClick={onToggleClick}>
//         {showText ? "Hide Text" : "Show Text"}
//       </button>
//       {showText && <p>This is the toggled text!</p>}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };

// render();
