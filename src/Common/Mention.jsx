import React, {Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

class Mention extends Component {

  static convertMentionsToJSX(stringContainingMentions) {
    let mentionsInLine = stringContainingMentions.match(/@\w+/g);
    //Get snippets surrounding mentions
    let snippets = stringContainingMentions.split(/@\w+/g);

    //Start with first snippet (ie before first mention, then push each formatted mention into the array followed by the next snippet)
    let result = [snippets.shift()];
    mentionsInLine.forEach((mention, index) => {
      result.push(<Mention key={`mention[${index}]`} mentionString={mention}></Mention>);
      result.push(snippets.shift());
    });
    return result;
  }

  static convertMentionsToHtml(htmlStringContainingMentions) {
    let mentionsInLine = htmlStringContainingMentions.match(/@\w+/g);
    //Get snippets surrounding mentions
    let snippets = htmlStringContainingMentions.split(/@\w+/g);

    //Start with first snippet (ie before first mention, then push each formatted mention into the array followed by the next snippet)
    let result = snippets.shift();
    mentionsInLine.forEach((mention, index) => {
      result += ReactDOMServer.renderToStaticMarkup(<Mention key={`mention[${index}]`} mentionString={mention}></Mention>);
      result += snippets.shift();
    });
    return result;
  }

  static nameFromMentionString(mentionString) {
    // Just remove the @ and replace underscores with spaces for now
    // Later on we should have a map that we find the right name for the mention
    return mentionString.replace("@", "").replace(/_/g, " ");
  };

  render() {
    return (<b className="mention">{Mention.nameFromMentionString(this.props.mentionString)}</b>);
  }
}

Mention.propTypes = {
  mentionString: PropTypes.string
}

export default Mention;