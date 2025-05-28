// components/list-item/list-item.js
class ListItemComponent {
  constructor() {
    this.properties = {
      iconPath: {
        type: String,
        value: ''
      },
      text: {
        type: String,
        value: '默认菜单项'
      },
      showBorder: {
        type: Boolean,
        value: true
      },
      isExtensible: {
        type: Boolean,
        value: false
      }
    };

    this.methods = {
      onTap: this.onTap
    };
  }

  // 点击事件处理函数
  onTap() {
    this.triggerEvent('itemtap');
  }
}

Component(new ListItemComponent());