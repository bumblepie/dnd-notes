import React, {Component} from 'react';
import './palette.css'
import './App.css';

class App extends Component {
  render() {
    return (<div class="row">
      <div class="left">
        <section class="content-section">
          <h1 class="title inverted">The Baroness</h1>
          <section class="tags-section">
            <span class="tag">Human</span>
            <span class="tag">Female</span>
            <span class="tag">Crimelord</span>
            <span class="tag">Age:32</span>
            <span class="tag new-tag">+</span>
          </section>
          <section class="content text">
            <h3>The Baroness</h3>
            <p>Head of the <b class="mention">Baroness Boys</b>, a gang based in <b class="mention">Dodson</b></p>
            <p>Lives in <b class="mention">The Baroness&apos; Mansion</b> in <b class="mention">Dodson</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies neque sit amet dictum vulputate. Vestibulum laoreet tortor velit, id posuere nunc placerat id. Nunc vel rutrum augue, eget suscipit arcu. Sed at ligula in orci molestie consectetur. Praesent at mauris interdum, eleifend justo vitae, suscipit tellus. Quisque ac ornare nisl, nec pulvinar lorem. Ut consequat sem at ante eleifend vehicula. Morbi interdum laoreet eros vel malesuada.</p>

            <p>Ut sem magna, sollicitudin quis aliquam eu, tincidunt non quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce porttitor pharetra augue, in molestie lectus placerat eu. Integer eget mauris lobortis, faucibus enim vitae, feugiat quam. Maecenas cursus odio nec felis facilisis, vitae dignissim quam porttitor. Curabitur elit dui, ornare eget dui vitae, accumsan molestie enim. Donec eget facilisis dui. Praesent pretium faucibus enim. Vestibulum a luctus nibh. Morbi tincidunt nisi felis, dapibus accumsan elit efficitur mattis. Nulla finibus viverra iaculis. Donec vitae orci eros. Donec in velit lacinia, rutrum enim non, fermentum magna. Nullam ac lobortis turpis. Fusce at urna rutrum, tincidunt orci id, dignissim neque. Nullam scelerisque ex purus, eget efficitur massa malesuada eget.</p>

            <p>Quisque non felis nec diam rutrum convallis pharetra eu orci. Vestibulum vitae dolor dolor. Donec faucibus ex ut urna congue consectetur. Pellentesque at lobortis justo. Maecenas porta ex mi, id mattis augue semper nec. Mauris malesuada tellus nisl, vitae pharetra magna tempus in. Aenean volutpat velit eget massa accumsan facilisis. Vestibulum odio odio, sagittis et congue id, pellentesque a augue. Phasellus finibus tincidunt ante, id fringilla nisl mattis in. Proin eget fringilla metus.</p>

            <p>Sed pellentesque facilisis mauris vel sagittis. Quisque tempor nulla in mauris volutpat, ornare tincidunt nulla elementum. Vestibulum efficitur ullamcorper felis, vitae gravida lectus egestas non. Integer quis est ac felis malesuada faucibus. Donec congue, dui vitae sollicitudin laoreet, purus nulla feugiat purus, at faucibus tortor purus vel massa. Quisque ullamcorper elit pharetra lectus blandit cursus. Quisque sit amet fringilla metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at sodales ante, vel lacinia nisl. Sed euismod porttitor erat, quis bibendum mauris porta non. Ut vel maximus turpis. Fusce aliquet, lorem ut dictum interdum, diam sapien ornare elit, sit amet egestas tortor eros vitae nisi. Fusce a pharetra augue.
            </p>

            <p>In gravida vestibulum libero eu mattis. Etiam sed odio purus. Donec eget tortor a magna facilisis dignissim. Sed porta in metus vitae accumsan. Phasellus in fermentum lacus. Pellentesque non orci diam. Nunc nec nunc lobortis, iaculis augue a, consequat augue. Maecenas id dictum nunc, in rhoncus lacus. Vestibulum scelerisque pharetra orci, et fermentum libero egestas eget.</p>
          </section>
          <button class="button">EDIT</button>
        </section>
      </div>
      <div class="right">
        <section class="mention-section-fixed">
          <div class="mention-div-inner">
            <h2 class="title inverted">Mentioned By</h2>
            <section class="mentions-container">
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Krug</b>
                </section>
                <section>Krug really admires
                  <b class="mention">The Baroness</b>
                  despite having never actually met her</section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Krug</b>
                </section>
                <section>Krug really admires
                  <b class="mention">The Baroness</b>
                  despite having never actually met her</section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Krug</b>
                </section>
                <section>Krug really admires
                  <b class="mention">The Baroness</b>
                  despite having never actually met her</section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
              <section class="mention-box text inverted">
                <section class="mention-heading">
                  <b>Operation Brimstone</b>
                </section>
                <section>The main people involved in Operation Brimstone are
                  <b class="mention">The Baroness</b>,
                  <b class="mention">Bastian Tellich</b>, and
                  <b class="mention">Marcel</b>
                </section>
              </section>
            </section>
          </div>
        </section>
      </div>
    </div>);
  }
}

export default App;
