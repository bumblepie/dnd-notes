import React, {Component} from 'react';
import MentionCard from './MentionCard.jsx';

class MentionsPanel extends Component {
  render() {
    return (<section className="mention-section-fixed">
      <div className="mention-div-inner">
        <h2 className="title inverted">Mentioned By</h2>
        <section className="mentions-container">
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met @The_Baroness"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Krug" line="Krug really admires @The_Baroness despite having never actually met her"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
          <MentionCard mentioner="@Operation_Brimstone" line="The main people involved in Operation Brimstone are @The_Baroness, @Bastian_Tellich and @Marcel"></MentionCard>
        </section>
      </div>
    </section>);
  }
}

export default MentionsPanel;