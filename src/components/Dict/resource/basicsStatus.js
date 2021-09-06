// Dict's resource

export default {
  // 数据状态
  dataStatus: {
    0: '未处理',
    1: '已处理',
    2: '已驳回'
  },
  // 数据用途--新增
  addDataPurpose: {
    0: '联合查询',
    1: '联合建模/预测'
  },
  // 数据任务
  taskType: {
    0: '查询',
    1: '联合建模',
    2: '联合预测'
  },
    // 数据用途--列表
    dataPurpose: {
        0: '联合查询',
        1: '联合建模/预测',
        2: '联合查询/建模/预测'
    },

    // 可使用函数
    supportedFunc: {
        count: 'count',
        min: 'min',
        max: 'max',
        avg: 'avg',
        sum: 'sum',
    },

    // 项目类型
    projectType: {
        0: '集中式',
        1: '分散式'
    },

    // 数据上传筛选框
    uploadstatus0: {
        0: { text: '未上传', type: 'default' },
        1: { text: '上传中', type: 'processing' },
        2: { text: '已上传', type: 'success' },
        3: { text: '停止上传', type: 'warning' },
        4: { text: '上传失败', type: 'error' },
    },
    // 数据上传状态
    uploadstatus: {
        0: { text: '未上传', type: 'default' },
        1: { text: '上传中', type: 'processing' },
        2: { text: '已上传', type: 'success' },
        3: { text: '停止上传', type: 'warning' },
        4: { text: '上传失败', type: 'error' },
        5: { text: '已删除', type: 'error' },
    },
    // 项目状态
    projectStatus: {
        0: '已创建',
        1: '已加入',
        2: '待加入',
        3: '已拒绝',
        4: '已解散',
        5: '已取消',
    },
    // 项目角色
    projectRole: {
        0: '项目发起者',
        1: '项目参与者',
    },

    taskStatus: {
        0: { text: '进行中', type: 'processing' },
        1: { text: '成功', type: 'success' },
        2: { text: '失败', type: 'error' },
        3: { text: '取消', type: 'warning' },
    },

    // 模型类型
    modelType: {
        1101: '逻辑回归',
    },
    // 项目状态
    projectSiteStatus: {
        0: '待加入',
        1: '已加入',
        2: '已拒绝',
        3: '已取消合作',
        4: '已取消邀请',
    },

}
