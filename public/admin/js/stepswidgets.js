const ListControl = CMS.getWidget('list').control;

const StepsControl = createClass({
  handleChange: function (e) {
    console.log(e.target.value);
  },

  render: function () {
    const value = this.props.value;
    return h('div', {},
      value.entrySeq().map(([key, value]) => {
        return h('div', {},
          h('input', {
            id: this.props.forID,
            className: this.props.classNameWrapper,
            type: 'text',
            value: value || '',
            onChange: this.handleChange,
          })
        );
      })
    )
  }    
});

CMS.registerWidget('steps', StepsControl);