import {Space, Table, Tag} from 'antd';
import type {ColumnsType} from 'antd/es/table';
import React from 'react';

interface DataType {
    key: string;
    title: string;
    age: number;
    address: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'key',
        key: 'key',
        width: 100,
        fixed: 'left',
        ellipsis: true,
        render: text => <a>{text}</a>,
    },
    {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        width: 100,
        fixed: 'left',
        ellipsis: true,
    },
    {
        title: '文章描述',
        dataIndex: 'description',
        key: 'description',
        ellipsis: true,
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
        ellipsis: true,
    },
    {
        title: '关键词',
        dataIndex: 'keyWord',
        key: 'keyWord',
        ellipsis: true,
    },
    {
        title: '文章内容',
        dataIndex: 'content',
        key: 'content',
        ellipsis: true,
    },
    {
        title: '点赞数量',
        dataIndex: 'lives',
        key: 'lives',
        ellipsis: true,
    },
    {
        title: '浏览数量',
        dataIndex: 'browse',
        key: 'browse',
        ellipsis: true,
    },
    {
        title: '创建时间',
        dataIndex: 'created',
        key: 'created',
        ellipsis: true,
    },
    {
        title: '更新时间',
        dataIndex: 'updated',
        key: 'updated',
        ellipsis: true,
    },
    // {
    //     title: 'Tags',
    //     key: 'tags',
    //     dataIndex: 'tags',
    //     fixed: 'right',
    //     width: 100,
    //     render: (_, {tags}) => (
    //         <>
    //             {tags.map(tag => {
    //                 let color = tag.length > 5 ? 'geekblue' : 'green';
    //                 if (tag === 'loser') {
    //                     color = 'volcano';
    //                 }
    //                 return (
    //                     <Tag color={color} key={tag}>
    //                         {tag.toUpperCase()}
    //                     </Tag>
    //                 );
    //             })}
    //         </>
    //     ),
    // },
    {
        title: '操作',
        key: 'action',
        fixed: 'right',
        width: 100,
        render: () => (
            <Tag color={"green"}>
                删除
            </Tag>
        ),
    },
];

const data: any = [
    {
        key: '1',
        title: 'ReactNative',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        title: 'JavaScript',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: "3",
        title: "ReactNative",
        author: "凉不乐",
        description: "描述ReactNative环境搭建",
        keyWord: "ReactNative",
        content: "reacthanekahdjadjabjdadanjdbajbad",
        cover: "images",
        browse: 100,
        lives: 99,
        category_id: "27878371871831",
        created: "时间",
        updated: "时间",
        tags: ["删除"]
    },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} scroll={{x: 1500}}/>;

export default App;