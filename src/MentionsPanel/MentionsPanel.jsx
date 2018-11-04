import React, {Component} from 'react';
import MentionCard from './MentionCard.jsx';

class MentionsPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      mentions: []
    }

    for (let i = 0; i < 10; i++) {
      this.state.mentions.push({
        mentioner: "@Krug",
        line: "Krug really admires @The_Baroness despite having never actually met her"
      });

      this.state.mentions.push({
        mentioner: "@Operation_Brimstone",
        line: "The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"
      });
    }
  }

  render() {
    return (<section className="mention-section-fixed">
      <div className="mention-div-inner">
        <h2 className="title inverted">Mentioned By</h2>
        <section className="mentions-container">
          {
            this.state.mentions.map((mention, index) => {
              return(<MentionCard key={`mention[${index}]`} mention={mention}></MentionCard>);
            })
          }
        </section>
      </div>
    </section>);
  }
}

export default MentionsPanel;