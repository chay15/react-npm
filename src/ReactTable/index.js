import React from 'react';
import './index.css';
import propTypes from 'prop-types';

class ReactTable extends React.Component {
  // constructor (props) {
  //     super(props);
  //     this.state = {
  //         dataSource : this.props,
  //         columns : this.props,
  //     }
  // }

  // 生成表格函数
  getTable = () => {
    const { columns } = this.props;
    const { dataSource } = this.props;
    return (
      <table className="rc-table">
        {this.getHeaderTable(columns)}
        {this.getBodyTable(columns, dataSource)}
      </table>
    );
  };

  getHeaderTable = (columns) => {
    console.log('columns', columns);
    return (
      <thead>
        <tr>
          {columns &&
            Array.isArray(columns) &&
            columns.map((item) => {
              return (
                <th key={item.key} className="rc-table-thead-th">
                  {' '}
                  {item.title}{' '}
                </th>
              );
            })}
        </tr>
      </thead>
    );
  };

  getBodyTable = (columns, dataSource) => {
    return (
      <tbody>
        {dataSource &&
          dataSource.length > 0 &&
          dataSource.map((item) => {
            return (
              <tr key={item.id}>
                {columns.map((colItem) => {
                  return (
                    <td className="rc-table-tbody-td" key={colItem.key + item.id}>
                      {item[colItem.dataIndex]}
                    </td>
                  );
                })}
              </tr>
            );
          })}
      </tbody>
    );
  };

  render() {
    return <div> {this.getTable()} </div>;
  }
}

ReactTable.propTypes = {
  dataSource: propTypes.array.isRequired,
  columns: propTypes.array.isRequired,
};

ReactTable.defaultProps = {
  dataSource: [],
  columns: [],
};

export default ReactTable;
