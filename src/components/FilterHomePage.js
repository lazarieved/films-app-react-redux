import { Select, Radio } from 'antd';
import  React from "react";
import { Typography } from 'antd';

const { Title } = Typography;

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

class FilterHomePage extends React.Component{
  state = {
    size: 'default',
  };
  render() {
    const { size } = this.state;
    return (
      <div>
        <Title level={3}>Filters</Title>
        <Select size={size} defaultValue="a1" onChange={handleChange} style={{ width: 200, paddingBottom: '15px' }}>
          {children}
        </Select>
        <br />
        <Select
          mode="multiple"
          size={size}
          placeholder="Please select"
          defaultValue={['a10']}
          onChange={handleChange}
          style={{ width: '100%', paddingBottom: '15px' }}
        >
          {children}
        </Select>
        <br />
        <Select
          mode="tags"
          size={size}
          placeholder="Please select"
          defaultValue={['c12']}
          onChange={handleChange}
          style={{ width: '100%', paddingBottom: '15px' }}
        >
          {children}
        </Select>
      </div>
    );
  }
}

export default FilterHomePage;
