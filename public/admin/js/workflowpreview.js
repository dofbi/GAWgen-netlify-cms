const WorkflowPreview = createClass({
  render: function () {
    const entry = this.props.entry;
    const name = entry.getIn(['data', 'name']);
    const on = entry.getIn(['data', 'on']);
    const jobs = entry.getIn(['data', 'jobs']);
    
    return h('div', {},
      h('h1', {}, `${name} - Preview`),
      h('table', {},
        h('tbody', {}
          , h('tr', {}
            , h('th', {}, 'Name')
            , h('td', {}, name)
          )
          , h('tr', {}
            , h('th', {}, 'On')
            , h('td', null
              , h('ul',null, on.map((event, index) => (
                h('ul',null, event ? event.map((item, i) => (
                  h('ul', {}, item ? item.map((element, i)=> (
                    h('li', {}, element)
                  )) : '')
              )) : '')
            ) )
          ))
          )
          , h('tr', {}
            , h('th', {}, 'Jobs')
            , h('td', null
              , h('ul', null, jobs.map((event, index) => (
                h('ul', null, event ? event.map((item, i) => (
                  h('li', {}, item )
                )) : '')
              ))
            ))
          )
        )
      )
    );
  }
});

CMS.registerPreviewTemplate("action", WorkflowPreview);