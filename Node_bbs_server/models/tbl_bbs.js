const tbl_bbs = (sequelize, DataTypes) =>
  // 지금부터 tbl_bbs라는 테이블을 만들겠다
  sequelize.define(
    "tbl_bbs",
    {
      /**
       * 칼럼이름 : type형
       */
      b_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      // 이 칼럼은 null값이 올 수 없다
      b_date_time: { type: DataTypes.STRING(125), allowNull: false },
      b_writer: { type: DataTypes.STRING(25), allowNull: false },
      b_subject: { type: DataTypes.STRING(125), allowNull: false },
      b_content: { type: DataTypes.STRING(1000), allowNull: false },
      // defaultValue: 0  처음에 값을 0으로 세팅
      b_count: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    { timestamps: true }
  );

module.exports = tbl_bbs;
