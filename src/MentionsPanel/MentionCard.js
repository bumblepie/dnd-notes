import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Mention from '../Common/Mention';

class MentionCard extends PureComponent {
  render() {
    const {
      mention: {
        mentioner,
        line,
      },
    } = this.props;

    return (
      <section className="mention-box text inverted">
        <section className="mention-heading">
          <b>{Mention.nameFromMentionString(mentioner)}</b>
        </section>
        <section>{Mention.convertMentionsToJSX(line)}</section>
      </section>
    );
  }
}

MentionCard.propTypes = {
  mention: PropTypes.shape({
    mentioner: PropTypes.string.isRequired,
    line: PropTypes.string.isRequired,
  }).isRequired,
};

export default MentionCard;
