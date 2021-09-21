import Vue from 'vue'

import {
  Button,
  Row,
  Col,
  FormModel,
  Input,
  Layout,
  Card,
  Menu,
  Icon,
  Breadcrumb,
  Dropdown,
  Avatar,
  message,
  Space,
  DatePicker,
  Select,
  Table,
  Tag,
  LocaleProvider,
  ConfigProvider,
  Modal,
  Radio

} from 'ant-design-vue'

Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(FormModel)
  .use(Input)
  .use(Layout)
  .use(Card)
  .use(Menu)
  .use(Icon)
  .use(Breadcrumb)
  .use(Dropdown)
  .use(Avatar)
  .use(Space)
  .use(DatePicker)
  .use(Select)
  .use(Table)
  .use(Tag)
  .use(LocaleProvider)
  .use(ConfigProvider)
  .use(Modal)
  .use(Radio)

Vue.prototype.$message = message
