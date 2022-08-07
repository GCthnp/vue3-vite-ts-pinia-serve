let students: Array<Students> = [
  {
    id: '2016050301',
    name: '刘备',
    sex: '男',
    phone: 100545450000,
    address: '北京市',
    className: '18本软件1班',
  },
  {
    id: '2016050302',
    name: '张飞',
    sex: '男',
    phone: 100545450120,
    address: '北京市',
    className: '18本软件2班',
  },
  {
    id: '2016050303',
    name: '张三',
    sex: '男',
    phone: 168545450120,
    address: '南昌市',
    className: '18本软件1班',
  },
  {
    id: '2016050304',
    name: '李四',
    sex: '女',
    phone: 168545127120,
    address: '上海市',
    className: '19本会计1班',
  },

  {
    id: '2016050305',
    name: '李四1',
    sex: '女',
    phone: 168545127122,
    address: '上海市',
    className: '19会计2',
  },
  {
    id: '2016050306',
    name: '李四2',
    sex: '女',
    phone: 168545127121,
    address: '上海市',
    className: '19会计1',
  },
  {
    id: '2016050307',
    name: '王五',
    sex: '男',
    phone: 168545127120,
    address: '深圳市',
    className: '18会计1',
  },
  {
    id: '2016050308',
    name: '王二',
    sex: '女',
    phone: 168545127120,
    address: '上海市',
    className: '19会计1',
  },
  {
    id: '2016050310',
    name: '李四12',
    sex: '女',
    phone: 168545127120,
    address: '上海市',
    className: '19会计1',
  },
  {
    id: '2016050311',
    name: '赵云',
    sex: '男',
    phone: 168545127120,
    address: '上海市',
    className: '19会计1',
  },
  {
    id: '2016050312',
    name: '马超',
    sex: '男',
    phone: 168545127120,
    address: '上海市',
    className: '19会计1',
  },
  {
    id: '2016050313',
    name: '刘备1',
    sex: '男',
    phone: 168545127120,
    address: '上海市',
    className: '19会计1',
  },
]
export default students

interface Students {
  id: string
  name: string
  sex: string
  phone: number
  address: string
  className: string
}
