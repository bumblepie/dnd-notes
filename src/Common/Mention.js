import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

class Mention extends Component {
  static convertMentionsToJSX(stringContainingMentions) {
    const mentionsInLine = stringContainingMentions.match(/@\w+/g);
    // Get snippets surrounding mentions
    const snippets = stringContainingMentions.split(/@\w+/g);

    // Start with first snippet (ie before first mention, then push each
    // formatted mention into the array followed by the next snippet)
    const result = [snippets.shift()];
    mentionsInLine.forEach((mention) => {
      result.push(<Mention key={mention} mentionString={mention} />);
      result.push(snippets.shift());
    });
    return result;
  }

  static convertMentionsToHtml(htmlStringContainingMentions) {
    const mentionsInLine = htmlStringContainingMentions.match(/@\w+/g);
    // Get snippets surrounding mentions
    const snippets = htmlStringContainingMentions.split(/@\w+/g);

    // Start with first snippet (ie before first mention, then push each
    // formatted mention into the array followed by the next snippet)
    let result = snippets.shift();
    mentionsInLine.forEach((mention) => {
      const mentionJSX = <Mention key={mention} mentionString={mention} />;
      result += ReactDOMServer.renderToStaticMarkup(mentionJSX);
      result += snippets.shift();
    });
    return result;
  }

  static nameFromMentionString(mentionString) {
    // Just remove the @ and replace underscores with spaces for now
    // Later on we should have a map that we find the right name for the mention
    return mentionString.replace('@', '').replace(/_/g, ' ');
  }

  render() {
    const { mentionString } = this.props;
    return (<b className="mention">{Mention.nameFromMentionString(mentionString)}</b>);
  }
}

Mention.propTypes = {
  mentionString: PropTypes.string.isRequired,
};

export default Mention;
