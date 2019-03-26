class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      counter: 0
    };
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked,
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div onClick = {this.clickHandler}>Hello {this.props.name} {this.state.counter} </div>
    )
  }
};
