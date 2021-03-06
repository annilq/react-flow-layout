// 每个 condition 包含多个 branch 分支,并且包含一个新增branch按钮
import { useContext } from "react";

import { PlusCircleOutlined } from "@ant-design/icons";
import HLine from "./HLine";
import FlowContext from "./flowContext";

interface Props {
  data: Flow.node;
  children?: any;
}
function Condition({ data, children }: Props) {
  const { onAddBranch } = useContext(FlowContext);

  return (
    <div className="condition">
      <PlusCircleOutlined
        style={{ color: "red", marginBottom: -7, zIndex: 99 }}
        onClick={() => onAddBranch(data)}
      />
      <div className="branch-nodes">{children}</div>
      <HLine data={data} />
    </div>
  );
}

export default Condition;
