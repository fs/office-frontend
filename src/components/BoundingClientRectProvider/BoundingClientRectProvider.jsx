import React, { Component, Fragment } from 'react';
import EventListener from 'react-event-listener';

class BoundingClientRectProvider extends Component {
  state = {
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  };

  componentDidMount() {
    this.recalculateBoundingClientRect();
  }

  recalculateBoundingClientRect = () => {
    const { elem } = this.props;
    const box = elem.getBoundingClientRect();

    const { body, documentElement } = document;

    const scrollTop = window.pageYOffset || documentElement.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || documentElement.scrollLeft || body.scrollLeft;

    const clientTop = documentElement.clientTop || body.clientTop || 0;
    const clientLeft = documentElement.clientLeft || body.clientLeft || 0;

    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    this.setState({
      top,
      left,
      width: box.right - box.left,
      height: box.bottom - box.top,
    });
  };

  render() {
    return (
      <Fragment>
        <EventListener target="window" onResize={this.recalculateBoundingClientRect} />
        {this.props.children(this.state)}
      </Fragment>
    );
  }
}

export default BoundingClientRectProvider;
