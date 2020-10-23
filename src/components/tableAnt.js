import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';
import './../styles/tableAnt.less'
import { Table, Button, Tag, Space } from 'antd';
import {
  FilePdfOutlined,
} from '@ant-design/icons';

const { Column, ColumnGroup } = Table;


function TableAnt() {

  const [data, setData] = useState([])


  const getDataFetch = async () => {

  await fetch('https://my-projekt.herokuapp.com/dane-persons')
  .then(res => res.json())
  .then(res => {
    setData(res)
  })
  .catch(err => console.error(err))
}

  useEffect(() => {
    getDataFetch()
  }, []);


  const daleteAction = async (record) => {
    await fetch('https://my-projekt.herokuapp.com/delete-dane-person/' + record.id , {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(res => {
      })
      .catch(err => console.error(err))
      getDataFetch()


  }

  return (
    <div>
      <Table key="table" className="table-ant" dataSource={data}>
        <Column  title="First Name" dataIndex="firstName" key={data.firstName} />
        <Column  title="Last Name" dataIndex="lastName" key={data.lastName} />
        <Column  title="Telephone" dataIndex="telephone" key={data.telephone}  />
        <Column
          title="Tags"
          dataIndex="tags"
          key={data.tags}
          render={tags => (
            <>
              {tags.map(tag => (
                <Tag color="blue" key={tag}>
                  {tag}
                </Tag>
              ))}
            </>
          )}
        />

        <ColumnGroup  key="ColumnGroupAction" title="Action">
          <Column
            title="View CV"
            key="actionView"
            render={(text, record) => (
              <Space size="middle">
                <FilePdfOutlined />
              </Space>
            )}
          />
          <Column
            title="Action"
            key="actionDelete"
            render={(text, record) => (
              <Space size="middle">
                <Button  onClick= {() => daleteAction(record)} type="primary">Delete</Button>
              </Space>
            )}
          />
        </ColumnGroup>
      </Table>
    </div>
  );
}

export default TableAnt;
