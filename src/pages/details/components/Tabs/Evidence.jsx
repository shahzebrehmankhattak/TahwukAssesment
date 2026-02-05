import { Card, Col, Row, Table, Tag, Avatar, Input, Button, Divider } from "antd";
import React,{useState} from "react";
import { dataSource, recentActivity, userReview } from "../../../../assets/mock-data/UserData";
import sentIcon from "../../../../assets/sent.png";

const { TextArea } = Input;

const Evidence = () => {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: comment,
      },
    ]);

    setComment("");
  };

  const columns = [
    {
      title: "Document Number",
      dataIndex: "docNumber",
      key: "docNumber",

      sorter: (a, b) => a.docNumber.localeCompare(b.docNumber),

      filters: [
        { text: "5.4.1.1", value: "5.4.1.1" },
        { text: "5.4.1.2", value: "5.4.1.2" },
      ],
      onFilter: (value, record) => record.docNumber.includes(value),

      render: (text) => (
        <span className="text-[#1D3557] font-medium">{text}</span>
      ),
    },

    {
      title: "Document Name",
      dataIndex: "docName",
      key: "docName",

      sorter: (a, b) => a.docName.localeCompare(b.docName),
    },

    {
      title: "Document Lead",
      dataIndex: "lead",
      key: "lead",

      sorter: (a, b) => a.lead.localeCompare(b.lead),
    },

    {
      title: "Document Preparer",
      dataIndex: "preparer",
      key: "preparer",
    },

    {
      title: "Date",
      dataIndex: "date",
      key: "date",

      sorter: (a, b) => new Date(a.date) - new Date(b.date),
    },

    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",

      filters: [
        { text: "Approved", value: "Approved" },
        { text: "Pending Review", value: "Pending Review" },
      ],
      onFilter: (value, record) => record.status === value,

      render: (status) => {
        if (status === "Approved") {
          return (
            <Tag className="px-4 py-1 rounded-full bg-green-100 text-green-600 border-none">
              Approved
            </Tag>
          );
        }

        return (
          <Tag className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-600 border-none">
            Pending Review
          </Tag>
        );
      },
    },
  ];

 
  return (
    <>
      <Card>
        <div className="overflow-x-auto">
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          className="rounded-xl custom-table"
        />
        </div>
      </Card>
      <Row gutter={[15, 15]} className="mt-4">
        <Col xl={16} lg={16}>
          <Card>
            <h3 className="font-bold text-base leading-[16px] capitalize text-[#1D3557] mb-3">
              Comments
            </h3>
            {userReview?.map((review) => {
              return (
                <>
                  <div className="border rounded-[10px] border-[#E0E8ED] mb-4">
                    <div className="flex justify-between m-3">
                      <div className="grid">
                        <div className="flex items-center gap-3">
                          <Avatar>{review.avatar}</Avatar>
                          <p className="text-sm font-bold text-[#1D3557] leading-[16px]">
                            {review.name}
                          </p>
                        </div>
                        <p className="text-sm font-normal text-[#1D3557] leading-[20px]">
                          {review.comment}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm font-normal text-[#8597A8] leading-[16px]">
                          {review.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
            {comments.length > 0 && (
              <div className="mt-4 space-y-2">
                {comments.map((item) => (
                  <div
                    key={item.id}
                    className="border rounded-[10px] border-[#E0E8ED] mb-4"
                  >
                    {item.text}
                  </div>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <TextArea rows={4} value={comment} onChange={(e) => setComment(e.target.value)}/>
              <Button
                className="bg-[#1D3557] text-white capitalize font-normal text-base leading-[16px] mt-3 p-5 text-center rounded-lg"
                htmlType="submit"
              >
                <img src={sentIcon} alt="" /> post comment
              </Button>
            </form>
          </Card>
        </Col>
        <Col xl={8} lg={8}>
        <Card>
            <h4 className="font-bold text-base leading-[16px] capitalize text-[#1D3557]">
              Recent Activities
            </h4>
            <Divider className="mb-0" />
            {recentActivity?.map((user, index) => (
              <div key={user.id || index}>
                <div className="flex justify-between items-center mt-2 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="rounded-full bg-[#DB1F26] w-[6px] h-[6px]"></div>
                    <span className="font-medium text-sm leading-[22px] capitalize text-[#1D3557]">
                      {user.activity}
                    </span>
                  </div>
                  <div className="user-percentage">
                    <p className="font-normal text-xs leading-[16px] capitalize text-[#8597A8]">
                      {user?.time} Ago
                    </p>
                  </div>
                </div>
                {index !== recentActivity.length - 1 && <Divider />}
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Evidence;
