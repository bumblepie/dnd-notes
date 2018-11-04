import React, {Component} from 'react';
import Mention from '../Common/Mention.jsx'
import PropTypes from 'prop-types';

class MentionCard extends Component {
  render() {
    return (<section className="mention-box text inverted">
      <section className="mention-heading">
        <b>{Mention.nameFromMentionString(this.props.mention.mentioner)}</b>
      </section>
      <section>{Mention.convertMentionsToJSX(this.props.mention.line)}</section>
    </section>);
  }
}

MentionCard.propTypes = {
    mention: PropTypes.shape({
      mentioner: PropTypes.string,
      line: PropTypes.string,
    })
}

export default MentionCard;