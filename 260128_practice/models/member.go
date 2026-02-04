package models

type ThnkMember struct {
	Idx       int     `json:"idx"`
	InputGb   string  `json:"input_gb"`
	LoginId   string  `json:"login_id"`
	LoginPwd  string  `json:"login_pwd"`
	DelYn     bool    `json:"del_yn"` // false(N), true(Y)
	InsDate   string  `json:"ins_date"`
	UpdUserId *string `json:"upd_user_id"`
	UpdDate   *string `json:"upd_date"`
}
