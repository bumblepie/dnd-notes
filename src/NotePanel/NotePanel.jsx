import React, {Component} from 'react';
import Tag from './Tag.jsx'
import Mention from '../Common/Mention.jsx'
class NotePanel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {name: 'Human'},
        {name: 'Female'},
        {name: 'Occupation', value: 'Crimelord'},
        {name: 'Age', value: '32'}
      ],

      content: `<h3>The Baroness</h3>
<p>Head of the @Baroness_Boys, a gang based in @Dodson</p>
<p>Lives in @The_Baroness_Mansion in @Dodson Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies neque sit amet dictum vulputate. Vestibulum laoreet tortor velit, id posuere nunc placerat id. Nunc vel rutrum augue, eget suscipit arcu. Sed at ligula in orci molestie consectetur. Praesent at mauris interdum, eleifend justo vitae, suscipit tellus. Quisque ac ornare nisl, nec pulvinar lorem. Ut consequat sem at ante eleifend vehicula. Morbi interdum laoreet eros vel malesuada.</p>

<p>Ut sem magna, sollicitudin quis aliquam eu, tincidunt non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce porttitor pharetra augue, in molestie lectus placerat eu. Integer eget mauris lobortis, faucibus enim vitae, feugiat quam. Maecenas cursus odio nec felis facilisis, vitae dignissim quam porttitor. Curabitur elit dui, ornare eget dui vitae, accumsan molestie enim. Donec eget facilisis dui. Praesent pretium faucibus enim. Vestibulum a luctus nibh. Morbi tincidunt nisi felis, dapibus accumsan elit efficitur mattis. Nulla finibus viverra iaculis. Donec vitae orci eros. Donec in velit lacinia, rutrum enim non, fermentum magna. Nullam ac lobortis turpis. Fusce at urna rutrum, tincidunt orci id, dignissim neque. Nullam scelerisque ex purus, eget efficitur massa malesuada eget.</p>

<p>Quisque non felis nec diam rutrum convallis pharetra eu orci. Vestibulum vitae dolor dolor. Donec faucibus ex ut urna congue consectetur. Pellentesque at lobortis justo. Maecenas porta ex mi, id mattis augue semper nec. Mauris malesuada tellus nisl, vitae pharetra magna tempus in. Aenean volutpat velit eget massa accumsan facilisis. Vestibulum odio odio, sagittis et congue id, pellentesque a augue. Phasellus finibus tincidunt ante, id fringilla nisl mattis in. Proin eget fringilla metus.</p>

<p>Sed pellentesque facilisis mauris vel sagittis. Quisque tempor nulla in mauris volutpat, ornare tincidunt nulla elementum. Vestibulum efficitur ullamcorper felis, vitae gravida lectus egestas non. Integer quis est ac felis malesuada faucibus. Donec congue, dui vitae sollicitudin laoreet, purus nulla feugiat purus, at faucibus tortor purus vel massa. Quisque ullamcorper elit pharetra lectus blandit cursus. Quisque sit amet fringilla metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at sodales ante, vel lacinia nisl. Sed euismod porttitor erat, quis bibendum mauris porta non. Ut vel maximus turpis. Fusce aliquet, lorem ut dictum interdum, diam sapien ornare elit, sit amet egestas tortor eros vitae nisi. Fusce a pharetra augue.
</p>

<p>In gravida vestibulum libero eu mattis. Etiam sed odio purus. Donec eget tortor a magna facilisis dignissim. Sed porta in metus vitae accumsan. Phasellus in fermentum lacus. Pellentesque non orci diam. Nunc nec nunc lobortis, iaculis augue a, consequat augue. Maecenas id dictum nunc, in rhoncus lacus. Vestibulum scelerisque pharetra orci, et fermentum libero egestas eget.</p>`
    }


  }
  prepareContent(content) {
    return {__html: Mention.convertMentionsToHtml(content)};
  }

  render() {
    return (<section className="content-section">
      <h1 className="title inverted">The Baroness</h1>
      <section className="tags-section">
        {
          this.state.tags.map((tag, index) => {
            return <Tag key={`tag[${index}]`} tag={tag}></Tag>;
          })
        }
        <span className="tag new-tag">+</span>
      </section>
      <section className="content text" dangerouslySetInnerHTML={this.prepareContent(this.state.content)}></section>
      <button className="button">EDIT</button>
    </section>);
  }
}

export default NotePanel;