import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  // render 밖에 어떤 함수에서 변수를 사용하는 방법
  // 사용하고자 하는 함수내에서 보낸 변수를 분해한
  //후 사용할 준비를 해야한다
  f1 = () => {
    const { buckectList } = this.props;
  };

  render() {
    // parent Componenet에서 보낸 변수를 받아서 분해한 후 사용할 준비하기
    const {
      bucketList,
      handleFlagClick,
      updateBucket,
      handleCancel,
    } = this.props;
    const bItemList = bucketList.map((bucket) => {
      return (
        <BucketItem
          bucket={bucket}
          handleFlagClick={handleFlagClick}
          updateBucket={updateBucket}
          handleCancel={handleCancel}
          handleComplet={this.props.handleComplet}
        />
      );
    });

    return (
      <section className="w3-container-fluid w3-margin">
        <table className="w3-table w3-table-all">
          <tr>
            <td>FLAG</td>
            <td>날짜</td>
            <td>Bucket</td>
            <td>COMP</td>
            <td>CANCEL</td>
          </tr>
          {bItemList}
        </table>
      </section>
    );
  }
}

export default BucketList;
