import React, { Component } from 'react';
import MentionCard from './MentionCard';

class MentionsPanel extends Component {
  constructor(props) {
    super(props);
    const mentions = [];

    for (let i = 0; i < 10; i++) {
      mentions.push({
        mentioner: '@Krug',
        line: 'Krug really admires @The_Baroness despite having never actually met her',
      });

      mentions.push({
        mentioner: '@Operation_Brimstone',
        line: 'The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel',
      });
    }

    this.state = { mentions };
  }

  render() {
    const { mentions } = this.state;
    return (
      <section className="mention-section-fixed">
        <div className="mention-div-inner">
          <h2 className="title inverted">Mentioned By</h2>
          <section className="mentions-container">
            {
            mentions.map(mention => (<MentionCard key={mention} mention={mention} />))
          }
          </section>
        </div>
      </section>
    );
  }
}

export default MentionsPanel;
