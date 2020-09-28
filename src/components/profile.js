import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { List, Avatar} from 'antd';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

class ProfilePanel extends React.Component {


  render() {
    return (
        <div className="profile-panel">
      <>
        <List
          dataSource={[
            {
              name: 'Welcome',
            },
          ]}
          style={{ width: 200, height: 64 }}
          renderItem={item => (
            <List.Item
              key={item.id}
            >
              <List.Item.Meta
                avatar={
                  <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                }
                title={<a href="">{item.name}</a>}
                description="Henry Johns Care"
              />
            </List.Item>
          )}
        />
        
      </></div>
    );
  }
}

export default ProfilePanel;