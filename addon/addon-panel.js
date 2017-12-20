import React from 'react';

export class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: JSON.stringify(props.data),
    };
  }
  onValueChange = e => {
    const newVal = e.target.value;
    const newData = JSON.parse(newVal);
    this.props.onchange(newData);
    this.setState({ val: newVal });
  };
  render() {
    return (
      <div>
        <h3>Theme Data</h3>
        <p>
          Navigate to <b>Theming</b> => <b>with Addon</b> and edit this theme object: (You'll see
          the changes immediately)
        </p>
        <textarea onChange={this.onValueChange} value={this.state.val} cols={80} rows={7} />
      </div>
    );
  }
}
