import React from 'react';
import ReactInput from './ReactInput';
import ReactTable from './ReactTable';
import { getName } from 'a-node-cc';

const dataSource = [
  {
    id: 1,
    name: 'lily',
    age: 15,
    address: 'Amercia',
    company: 'YonYou std. dep',
  },
  {
    id: 2,
    name: 'tom',
    age: 15,
    address: 'Amercia',
    company: 'YonYou std. dep',
  },
  {
    id: 3,
    name: 'eli',
    age: 15,
    address: 'England',
    company: 'yiqi std. dep',
  },
];

// 定义表结构
const columns = [
  {
    key: 1,
    title: '姓名',
    dataIndex: 'name',
  },
  {
    key: 2,
    title: '年纪',
    dataIndex: 'age',
  },
  {
    key: 3,
    title: '住址',
    dataIndex: 'address',
  },
  {
    key: 4,
    title: '公司',
    dataIndex: 'company',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.getDataSource(),
    };
  }

  cacheDataSource = null;

  getDataSource = () => {
    let dataSource = [];
    let i = 0;
    while (i < 20) {
      i++;

      dataSource.push({ id: i, name: getName(), age: 20, address: '北京海淀区XXX ', company: '用友' });
    }
    this.cacheDataSource = dataSource;
    return dataSource;
  };

  onSearch = (value) => {
    console.log('on search  ----', value);
    debugger;
    if (value) {
      const { dataSource } = this.state;
      let newDataSource = [];
      for (let item of dataSource) {
        if (item.name.includes(value)) {
          newDataSource.push(item);
        }
      }
      this.setState({ dataSource: newDataSource });
    } else {
      this.setState({ dataSource: this.cacheDataSource });
    }
  };

  render() {
    return (
      <div>
        <ReactInput onSearch={this.onSearch} onClick={this.onSearch} />
        <ReactTable dataSource={this.state.dataSource} columns={columns} />
      </div>
    );
  }
}

export default App;
