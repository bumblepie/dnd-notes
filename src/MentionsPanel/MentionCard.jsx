import React, {Component} from 'react';

class MentionCard extends Component {
  render() {
    return (<section className="mention-box text inverted">
      <section className="mention-heading">
        <b>{this.props.mentioner}</b>
      </section>
      <section>{this.getJSXForLine()}</section>
    </section>);
  }

  getJSXForLine() {
    let mentionsInLine = this.props.line.match(/@\w+/g);
    //Get snippets surrounding mentions
    let snippets = this.props.line.split(/@\w+/g);

    //Start with first snippet (ie before first mention, then push each formatted mention into the array followed by the next snippet)
    let result = [snippets.shift()];
    mentionsInLine.forEach((mention, index) => {
      result.push(<b key={`mention[${index}]`} className="mention">{mention}</b>);
      result.push(snippets.shift());
    });
    return result;
  }
}

export default MentionCard;