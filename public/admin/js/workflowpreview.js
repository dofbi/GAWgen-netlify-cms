const WorkflowPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const name = entry.getIn(['data', 'name']);
    const on = entry.getIn(['data', 'on']).toJS();
    const jobs = entry.getIn(['data', 'jobs']);

    code = `nam: ${name}\n\n`;
    code += `on:\n\t`;
    code += on.map( (key,value) => (
      `${key}: ${value}`
    ) )

    return h('div', {},
      h('h1', {}, `${name} - Preview`),
      h('textarea',{}, code)
    );
  }
});

CMS.registerPreviewTemplate("action", WorkflowPreview);