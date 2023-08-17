export const GetMsg = (msgNo) => {
    const index = Message.findIndex((x) => x.Id === msgNo);
    if (index === -1) {
        return '';
    }
    return Message[index].Content;
};
const Message = [
    {
        "Id": "C001",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn lưu dữ liệu này không?"
    },
    {
        "Id": "C002",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn xóa dữ liệu này không?"
    },
    {
        "Id": "C003",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Đã lưu dữ liệu thành công, bạn có muốn trở về trang danh sách không?"
    },
    {
        "Id": "C004",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Đã xóa dữ liệu thành công, bạn có muốn trở về trang danh sách không?"
    },
    {
        "Id": "C005",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thật sự muốn reset mật khẩu cho tài khoản này không?"
    },
    {
        "Id": "C006",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn thay đổi mật khẩu không?"
    },
    {
        "Id": "C007",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn lưu dữ liệu này không ?"
    },
    {
        "Id": "C008",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn xác nhận đã thanh toán cho đơn hàng này không?"
    },
    {
        "Id": "C009",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn mở khóa tài khoản này không?"
    },
    {
        "Id": "C010",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn gửi thông báo cho tất cả khách hàng?"
    },
    {
        "Id": "C011",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn gửi thông tin đã nhập đến khách hàng không?"
    },
    {
        "Id": "C012",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn đã thực hiện hoạt động này 1 lần rồi, bạn có muốn thực hiện lại 1 lần nữa không?"
    },
    {
        "Id": "C013",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Đã gửi đến tất cả khách hàng thành công, bạn có muốn download kết quả gửi không?"
    },
    {
        "Id": "C014",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn xác thực cho tài khoản này không?"
    },
    {
        "Id": "C015",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn khoá tài khoản này không?"
    },
    {
        "Id": "C016",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn đưa tài khoản này vào blacklist hay không?"
    },
    {
        "Id": "C017",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn xoá tài khoản này khỏi blacklist hay không?"
    },
    {
        "Id": "C018",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn gửi thông báo tin tức khuyến mãi này đến khách hàng đã chọn không?"
    },
    {
        "Id": "C019",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn đã thực hiện hoạt động này 1 lần rồi, bạn có muốn thực hiện lại 1 lần nữa không?"
    },
    {
        "Id": "C020",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn reset số lần đã gọi API về 0 hay không? Khi reset về 0, batch sẽ tự động gọi lại API này."
    },
    {
        "Id": "C021",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn reset việc gửi mail này không? Khi reset, batch sẽ tự động gửi lại email này."
    },
    {
        "Id": "C022",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn reset việc gửi thông báo này không? Khi reset, batch sẽ tự động gửi lại thông báo này."
    },
    {
        "Id": "C023",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có muốn tiếp nhận hỗ trợ này không?"
    },
    {
        "Id": "C024",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có muốn thoát khỏi hội thoại này không?"
    },
    {
        "Id": "C025",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có  muốn kết thúc lần hỗ trợ này không?"
    },
    {
        "Id": "C026",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn kết thúc phản hồi/góp ý/khiếu nại này không?"
    },
    {
        "Id": "C027",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có thực sự muốn thay đổi loại của cuộc hội thoại này không?"
    },
    {
        "Id": "C028",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Sau khi xác nhận, đơn hàng sẽ không thể thay đổi dược nữa, bạn có muốntiếp tục không?"
    },
    {
        "Id": "C029",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Sau khi xác nhận thanh toán, đơn hàng sẽ tự động được xác nhận và không thể thay đổi dược nữa, bạn có muốn tiếp tục không?"
    },
    {
        "Id": "C030",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn huỷ đơn hàng này không?"
    },
    {
        "Id": "C031",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Sau khi xác nhận đơn hàng đã hoàn thành, hệ thống sẽ tiến hành tích luỹ điểm cho khách hàng, bạn có muốn tiếp tục không?"
    },
    {
        "Id": "C032",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn thay đổi trạng thái của đơn hàng này không?"
    },
    {
        "Id": "C033",
        "Type": 1,
        "Title": "Confirm",
        "Content": "Bạn có chắc chắn muốn gửi email tin tức khuyến mãi này đến những người đã theo dõi không?"
    },
    {
        "Id": "E001",
        "Type": 4,
        "Title": "Error",
        "Content": "Nội dung này không được để trống."
    },
    {
        "Id": "E002",
        "Type": 4,
        "Title": "Error",
        "Content": "Email không đúng định dạng."
    },
    {
        "Id": "E003",
        "Type": 4,
        "Title": "Error",
        "Content": "Ngày tháng không đúng định dạng."
    },
    {
        "Id": "E004",
        "Type": 4,
        "Title": "Error",
        "Content": "Đường dẫn sai định dạng."
    },
    {
        "Id": "E005",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn không được phép nhập quá {0} kí tự."
    },
    {
        "Id": "E006",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn phải nhập tối thiểu {1} kí tự."
    },
    {
        "Id": "E007",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị này phải lớn hơn hoặc bằng {2}."
    },
    {
        "Id": "E008",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị này phải nhỏ hơn hoặc bằng {3}."
    },
    {
        "Id": "E009",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điện thoại sai định dạng."
    },
    {
        "Id": "E010",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian bắt đầu phải bé hơn thời gian kết thúc."
    },
    {
        "Id": "E011",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị này đang bị trùng lặp."
    },
    {
        "Id": "E012",
        "Type": 4,
        "Title": "Error",
        "Content": "Tài khoản không tồn tại."
    },
    {
        "Id": "E013",
        "Type": 4,
        "Title": "Error",
        "Content": "Mật khẩu không chính xác."
    },
    {
        "Id": "E014",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điện thoại hoặc mật khẩu không chính xác, vui lòng nhập lại."
    },
    {
        "Id": "E015",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên đăng nhập này đã được đăng ký. Vui lòng sử dụng Tên đăng nhập khác!"
    },
    {
        "Id": "E016",
        "Type": 4,
        "Title": "Error",
        "Content": "Hệ thống phải tồn tại ít nhất 1 tài khoản để sử dụng."
    },
    {
        "Id": "E017",
        "Type": 4,
        "Title": "Error",
        "Content": "Mật khẩu phải chứa ít nhất 8 ký tự, có chứa chữ hoa, chữ thường và ký tự đặc biệt."
    },
    {
        "Id": "E018",
        "Type": 4,
        "Title": "Error",
        "Content": "Mật khẩu xác nhận không trùng khớp, vui lòng kiểm tra lại."
    },
    {
        "Id": "E019",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên đăng nhập phải có ít nhất 4 ký tự, chỉ được nhập các ký tự chữ cái, chữ số và các dấu chấm (.), gạch nối (-), gạch dưới (_)."
    },
    {
        "Id": "E020",
        "Type": 4,
        "Title": "Error",
        "Content": "File vượt quá dung lượng cho phép."
    },
    {
        "Id": "E021",
        "Type": 4,
        "Title": "Error",
        "Content": "File không đúng định dạng."
    },
    {
        "Id": "E022",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể upload quá {0} file cùng lúc."
    },
    {
        "Id": "E023",
        "Type": 4,
        "Title": "Error",
        "Content": "Có lỗi trong quá trình tải file, vui lòng thử lại."
    },
    {
        "Id": "E024",
        "Type": 4,
        "Title": "Error",
        "Content": "Vui lòng chọn file tải lên."
    },
    {
        "Id": "E025",
        "Type": 4,
        "Title": "Error",
        "Content": "Kích thước hình ảnh không đúng yêu cầu."
    },
    {
        "Id": "E026",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể thực hiện thao tác này, vì số item hiển thị trên trang chủ đã đạt mức tối thiểu."
    },
    {
        "Id": "E027",
        "Type": 4,
        "Title": "Error",
        "Content": "Link này chỉ có thể chứa chuỗi không dấu bao gồm chữ thường, chữ hoa & dấu gạch nối (-)."
    },
    {
        "Id": "E028",
        "Type": 4,
        "Title": "Error",
        "Content": "Lưu dữ liệu không thành công, vui lòng thử lại."
    },
    {
        "Id": "E029",
        "Type": 4,
        "Title": "Error",
        "Content": "Xóa dữ liệu không thành công, vui lòng thử lại."
    },
    {
        "Id": "E030",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể hiển thị số lượng kết quả quá lớn."
    },
    {
        "Id": "E031",
        "Type": 4,
        "Title": "Error",
        "Content": "Có lỗi trong quá trình tạo file, vui lòng thử lại."
    },
    {
        "Id": "E032",
        "Type": 4,
        "Title": "Error",
        "Content": "Dữ liệu này đã tồn tại trong hệ thống"
    },
    {
        "Id": "E033",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã của thông báo đã tồn tại trong hệ thống"
    },
    {
        "Id": "E034",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã của chức năng đã tồn tại trong hệ thống"
    },
    {
        "Id": "E035",
        "Type": 4,
        "Title": "Error",
        "Content": "Đang có tài khoản thuộc nhóm này, nên không thể xóa, hãy xóa hết tài khoản của nhóm này trước"
    },
    {
        "Id": "E036",
        "Type": 4,
        "Title": "Error",
        "Content": "Không có dữ liệu export"
    },
    {
        "Id": "E037",
        "Type": 4,
        "Title": "Error",
        "Content": "Chức năng này hiện không hoạt động trên mobile"
    },
    {
        "Id": "E038",
        "Type": 4,
        "Title": "Error",
        "Content": "Email này không tồn tại"
    },
    {
        "Id": "E039",
        "Type": 4,
        "Title": "Error",
        "Content": "Quá hạn để thay đổi mật khẩu"
    },
    {
        "Id": "E040",
        "Type": 4,
        "Title": "Error",
        "Content": "Email này đã được đăng ký. Vui lòng sử dụng email khác!"
    },
    {
        "Id": "E041",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã của nhóm tài khoản đã tồn tại trong hệ thống"
    },
    {
        "Id": "E042",
        "Type": 4,
        "Title": "Error",
        "Content": "Số tiền chuyển khoản không chính xác"
    },
    {
        "Id": "E043",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã OTP không chính xác hoặc hết hạn"
    },
    {
        "Id": "E044",
        "Type": 4,
        "Title": "Error",
        "Content": "Email hoặc số điện thoại không đúng"
    },
    {
        "Id": "E045",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn đã yêu cầu OTP quá nhiều lần, vui lòng thử lại sau"
    },
    {
        "Id": "E046",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điện thoại này đã được đăng ký. Vui lòng sử dụng số điện thoại khác!"
    },
    {
        "Id": "E047",
        "Type": 4,
        "Title": "Error",
        "Content": "Chúng tôi đã nhận được đánh giá của tài khoản này trước đó rồi"
    },
    {
        "Id": "E048",
        "Type": 4,
        "Title": "Error",
        "Content": "Hoá đơn không tồn tại"
    },
    {
        "Id": "E049",
        "Type": 4,
        "Title": "Error",
        "Content": "Câu hỏi bảo mật đang được sử dụng"
    },
    {
        "Id": "E050",
        "Type": 4,
        "Title": "Error",
        "Content": "Yêu cầu nhập Captcha"
    },
    {
        "Id": "E051",
        "Type": 4,
        "Title": "Error",
        "Content": "Vượt quá số ký tự cho phép"
    },
    {
        "Id": "E052",
        "Type": 4,
        "Title": "Error",
        "Content": "Captcha không hợp lệ"
    },
    {
        "Id": "E053",
        "Type": 4,
        "Title": "Error",
        "Content": "Vượt quá số lần có thể đăng ký tài khoản trong 1 ngày"
    },
    {
        "Id": "E054",
        "Type": 4,
        "Title": "Error",
        "Content": "Tài khoản đã bị tạm khoá, vui lòng liên hệ ngay với bộ phận Chăm Sóc Khách Hàng của chúng tôi theo số điện thoại 090.1800.888  (Bấm số 8) để được hỗ trợ."
    },
    {
        "Id": "E055",
        "Type": 4,
        "Title": "Error",
        "Content": "Vượt quá số lần cho phép chỉnh sửa trong ngày"
    },
    {
        "Id": "E056",
        "Type": 4,
        "Title": "Error",
        "Content": "Vui lòng nhập nhận xét đánh giá khi từ chối xác minh tài khoản."
    },
    {
        "Id": "E057",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể gửi thông báo lúc này do trạng thái chương trình khuyến mãi đang \"Ẩn\", vui lòng chuyển sang trạng thái \"Hiển thị\" và thử lại."
    },
    {
        "Id": "E058",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã quét được đã hết hạn hoặc không chính xác"
    },
    {
        "Id": "E059",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể tặng nhiều hơn số điểm bạn sở hữu. Vui lòng kiểm tra lại!"
    },
    {
        "Id": "E060",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điện thoại nhận không đúng hoặc không sử dụng FM Plus!"
    },
    {
        "Id": "E061",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã số mua hàng đã được sử dụng hoặc không thuộc sở hữu của bạn"
    },
    {
        "Id": "E062",
        "Type": 4,
        "Title": "Error",
        "Content": "Không có khách hàng nào được gửi"
    },
    {
        "Id": "E063",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị bắt đầu phải bé hơn giá trị kết thúc."
    },
    {
        "Id": "E064",
        "Type": 4,
        "Title": "Error",
        "Content": "Tài khoản của bạn đã bị đưa vào blacklist, vui lòng liên hệ ngay với bộ phận Chăm Sóc Khách Hàng của chúng tôi theo số điện thoại 090.1800.888  (Bấm số 8) để được hỗ trợ"
    },
    {
        "Id": "E065",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị này không liên tiếp nhau"
    },
    {
        "Id": "E066",
        "Type": 4,
        "Title": "Error",
        "Content": "Phản ánh, khiếu nại của bạn đang được nhân viên chắm sóc khách hàng xử lý, nên không thể chỉnh sửa được"
    },
    {
        "Id": "E067",
        "Type": 4,
        "Title": "Error",
        "Content": "Phản ánh,khiếu nại của bạn đang được nhân viên chắm sóc khách hàng xử lý, nên không thể  xoá được"
    },
    {
        "Id": "E068",
        "Type": 4,
        "Title": "Error",
        "Content": "Góp ý của bạn đang được nhân viên chắm sóc khách hàng xử lý, nên không thể chỉnh sửa được"
    },
    {
        "Id": "E069",
        "Type": 4,
        "Title": "Error",
        "Content": "Góp ý của bạn đang được nhân viên chắm sóc khách hàng xử lý, nên không thể xoá được"
    },
    {
        "Id": "E070",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy yêu cầu chăm sóc khách hàng"
    },
    {
        "Id": "E071",
        "Type": 4,
        "Title": "Error",
        "Content": "Yêu cầu chắm sóc khách hàng đang được xử lý bởi nhân viên chăm sóc kách hàng khác"
    },
    {
        "Id": "E072",
        "Type": 4,
        "Title": "Error",
        "Content": "Yêu cầu chắm sóc khách hàng đã hoàn thành"
    },
    {
        "Id": "E073",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tồn tại đánh giá cho đơn hàng này"
    },
    {
        "Id": "E074",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tồn tại góp ý, phản ảnh, khiếu nại"
    },
    {
        "Id": "E075",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tồn tại đánh giá cho góp ý, phản ảnh, khiếu nại này"
    },
    {
        "Id": "E076",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã nhân viên đã tồn tại trong hệ thống"
    },
    {
        "Id": "E077",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã vượt quá số lần chỉnh sửa tên đăng nhập trong ngày"
    },
    {
        "Id": "E078",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã vượt quá số lần chỉnh sửa giới tính trong ngày"
    },
    {
        "Id": "E079",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã vượt quá số lần chỉnh sửa ngày sinh trong ngày"
    },
    {
        "Id": "E080",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã vượt quá số lần chỉnh sửa địa chỉ trong ngày"
    },
    {
        "Id": "E081",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể xoá nội dung đã được đăng"
    },
    {
        "Id": "E082",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể chỉnh sửa nội dung đã được đăng"
    },
    {
        "Id": "E083",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã vượt quá số lần đăng cho phép"
    },
    {
        "Id": "E084",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian đã chọn phải lớn hơn thời gian hiện tại"
    },
    {
        "Id": "E085",
        "Type": 4,
        "Title": "Error",
        "Content": "Tài khoản đã bị tạm khoá, vui lòng liên hệ quản trị hệ thống để mở lại tài khoản."
    },
    {
        "Id": "E086",
        "Type": 4,
        "Title": "Error",
        "Content": "Dữ liệu không tồn tại"
    },
    {
        "Id": "E087",
        "Type": 4,
        "Title": "Error",
        "Content": "Đơn hàng không được phép hủy"
    },
    {
        "Id": "E088",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá của sản phẩm đã thay đổi, vui lòng cập nhật lại giỏ hàng"
    },
    {
        "Id": "E089",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có lỗi xảy ra trong quá trình mua hàng"
    },
    {
        "Id": "E090",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã SKU đã tồn tại trong hệ thống, vui lòng kiểm tra lại."
    },
    {
        "Id": "E091",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn phải nhập thông tin số lượng sản phẩm"
    },
    {
        "Id": "E092",
        "Type": 4,
        "Title": "Error",
        "Content": "Không đủ điểm để thực hiện đơn hàng này, vui lòng kiểm tra lại"
    },
    {
        "Id": "E093",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã giảm giá đang sử dụng trong đơn hàng này đã được sử dụng hoặc đã hết hạn, vui lòng kiểm tra lại"
    },
    {
        "Id": "E094",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy đơn hàng đang xử lý, có thể đơn hàng đã bị xoá, vui lòng kiểm tra lại"
    },
    {
        "Id": "E095",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể thay đổi trạng thái của đơn hàng này"
    },
    {
        "Id": "E096",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã miễn phí vận chuyển đang sử dụng trong đơn hàng này đã được sử dụng hoặc đã hết hạn, vui lòng kiểm tra lại"
    },
    {
        "Id": "E097",
        "Type": 4,
        "Title": "Error",
        "Content": "Trong đơn hàng có sản phẩm không còn đủ trong kho, vui lòng kiểm tra lại"
    },
    {
        "Id": "E098",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá khuyến mãi phải nhỏ hơn giá hiện tại"
    },
    {
        "Id": "E099",
        "Type": 4,
        "Title": "Error",
        "Content": "Số lượng sản phẩm khuyến mãi phải nhỏ hơn số lượng sản phẩm hiện tại"
    },
    {
        "Id": "E100",
        "Type": 4,
        "Title": "Error",
        "Content": "Khung giờ bạn chọn đã có chương trình khuyến mãi khác diễn ra"
    },
    {
        "Id": "E101",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có giao diện khác hiển thị trong khoảng thời gian đã chọn"
    },
    {
        "Id": "E102",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm đã tồn tại trong giờ vàng đang/sắp diễn ra"
    },
    {
        "Id": "E103",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm đã tồn tại trong siêu sale đang/sắp diễn ra"
    },
    {
        "Id": "E104",
        "Type": 4,
        "Title": "Error",
        "Content": "Không có sản phẩm phù hợp"
    },
    {
        "Id": "E105",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy sản phẩm"
    },
    {
        "Id": "E106",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã đủ tối đa X hoá đơn. Vui lòng xoá bớt hoá đơn không dùng hoặc lưu tạm để tiếp tục."
    },
    {
        "Id": "E107",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher không tồn tại"
    },
    {
        "Id": "E108",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher không áp dụng cho khách hàng này"
    },
    {
        "Id": "E109",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher không áp dụng tại cửa hàng này"
    },
    {
        "Id": "E110",
        "Type": 4,
        "Title": "Error",
        "Content": "Nhân viên thu ngân không tồn tại"
    },
    {
        "Id": "E111",
        "Type": 4,
        "Title": "Error",
        "Content": "Nhân viên tư vấn không tồn tại"
    },
    {
        "Id": "E112",
        "Type": 4,
        "Title": "Error",
        "Content": "Khách hàng không tồn tại"
    },
    {
        "Id": "E113",
        "Type": 4,
        "Title": "Error",
        "Content": "Điểm vàng hoặc Điểm bạc không sử dụng chung với Mã giảm giá"
    },
    {
        "Id": "E114",
        "Type": 4,
        "Title": "Error",
        "Content": "Điểm vàng không đủ"
    },
    {
        "Id": "E115",
        "Type": 4,
        "Title": "Error",
        "Content": "Điểm bạc không đủ"
    },
    {
        "Id": "E116",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn chưa nhập tiền Khách thanh toán"
    },
    {
        "Id": "E117",
        "Type": 4,
        "Title": "Error",
        "Content": "Số tiền khách thanh toán không được âm"
    },
    {
        "Id": "E118",
        "Type": 4,
        "Title": "Error",
        "Content": "Không có sản phẩm nào cần thanh toán"
    },
    {
        "Id": "E119",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm không tồn tại"
    },
    {
        "Id": "E120",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm không đủ tồn kho"
    },
    {
        "Id": "E121",
        "Type": 4,
        "Title": "Error",
        "Content": "Có lỗi trong quá trình tính toán, vui lòng thanh toán lại hoặc thanh toán từng sản phẩm"
    },
    {
        "Id": "E122",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn không thể sử dụng lại mật khẩu cũ, vui lòng thử mật khẩu khác"
    },
    {
        "Id": "E123",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn phải chọn ít nhất 1 dòng để thực hiện thao tác này"
    },
    {
        "Id": "E124",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn phải nhập số lượng nhiều hơn 20"
    },
    {
        "Id": "E125",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn phải nhập số tiền nhiều hơn 1000"
    },
    {
        "Id": "E126",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher chưa đến hạn sử dụng"
    },
    {
        "Id": "E127",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher đã hết hạn"
    },
    {
        "Id": "E128",
        "Type": 4,
        "Title": "Error",
        "Content": "Voucher đã hết số lần sử dụng"
    },
    {
        "Id": "E129",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể sử dụng voucher vì chưa đạt giá trị đơn hàng tối thiểu"
    },
    {
        "Id": "E130",
        "Type": 4,
        "Title": "Error",
        "Content": "Số tiền giảm giá của Mã giảm giá vượt quá giá trị tối đa, vui lòng thử lại"
    },
    {
        "Id": "E131",
        "Type": 4,
        "Title": "Error",
        "Content": "{0} không tồn tại"
    },
    {
        "Id": "E132",
        "Type": 4,
        "Title": "Error",
        "Content": "Không được nhập ngày quá khứ"
    },
    {
        "Id": "E133",
        "Type": 4,
        "Title": "Error",
        "Content": "Ngày nhập hàng không được nhỏ hơn ngày xuất hàng"
    },
    {
        "Id": "E134",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy chi nhánh"
    },
    {
        "Id": "E135",
        "Type": 4,
        "Title": "Error",
        "Content": "Nhân viên không thuộc chi nhánh này"
    },
    {
        "Id": "E136",
        "Type": 4,
        "Title": "Error",
        "Content": "Người kiểm hàng không thuộc chi nhánh này"
    },
    {
        "Id": "E137",
        "Type": 4,
        "Title": "Error",
        "Content": "Người xuất kho không thuộc chi nhánh này"
    },
    {
        "Id": "E138",
        "Type": 4,
        "Title": "Error",
        "Content": "Loại xuất hàng không đúng"
    },
    {
        "Id": "E139",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy nhà cung cấp hàng phù hợp"
    },
    {
        "Id": "E140",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy sản phẩm trong kho"
    },
    {
        "Id": "E141",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách sản phẩm trống"
    },
    {
        "Id": "E142",
        "Type": 4,
        "Title": "Error",
        "Content": "Đơn xuất hàng không tồn tại"
    },
    {
        "Id": "E143",
        "Type": 4,
        "Title": "Error",
        "Content": "Người nhập hàng không thuộc chi nhánh này"
    },
    {
        "Id": "E144",
        "Type": 4,
        "Title": "Error",
        "Content": "Loại nhập hàng không đúng"
    },
    {
        "Id": "E145",
        "Type": 4,
        "Title": "Error",
        "Content": "Phiếu nhập hàng không tồn tại"
    },
    {
        "Id": "E146",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm chưa tồn tại trong hệ thống"
    },
    {
        "Id": "E147",
        "Type": 4,
        "Title": "Error",
        "Content": "Số lượng sản phẩm nhập kho phải nhỏ hơn số lượng sản phẩm xuất kho"
    },
    {
        "Id": "E148",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể thực hiện chuyển hàng trong cùng một chi nhánh"
    },
    {
        "Id": "E149",
        "Type": 4,
        "Title": "Error",
        "Content": "Phiếu chuyển hàng không tồn tại"
    },
    {
        "Id": "E151",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm đã tồn tại trong kho, không thể xoá sản phầm này"
    },
    {
        "Id": "E152",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã ngành hàng không được rỗng"
    },
    {
        "Id": "E153",
        "Type": 4,
        "Title": "Error",
        "Content": "Mã Nhóm/Ngành hàng không được để trống"
    },
    {
        "Id": "E154",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên nhóm hàng đã tồn tại"
    },
    {
        "Id": "E155",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điểm tích luỹ tối đa khi sử dụng không được bé hơn sô điểm tích luỹ tối thiểu sử dụng"
    },
    {
        "Id": "E156",
        "Type": 4,
        "Title": "Error",
        "Content": "Đường dẫn đã tồn tại"
    },
    {
        "Id": "E160",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm con đã tồn tại"
    },
    {
        "Id": "E161",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã hết phép"
    },
    {
        "Id": "E166",
        "Type": 4,
        "Title": "Error",
        "Content": "Nhóm quyền đã tồn tại tài khoản nên không thể xoá"
    },
    {
        "Id": "E168",
        "Type": 4,
        "Title": "Error",
        "Content": "Số giờ vắng mặt không được lớn hơn 4"
    },
    {
        "Id": "E171",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn không có đơn tăng ca vào ngày này"
    },
    {
        "Id": "E172",
        "Type": 4,
        "Title": "Error",
        "Content": "Số giờ bù lớn hơn số giờ làm"
    },
    {
        "Id": "E173",
        "Type": 4,
        "Title": "Error",
        "Content": "Tài khoản ngân hàng không tồn tại"
    },
    {
        "Id": "E174",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy ngày tạo"
    },
    {
        "Id": "E175",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy sổ quỹ"
    },
    {
        "Id": "E179",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể sửa phiếu thu/chi"
    },
    {
        "Id": "E180",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể xoá phiếu thu/chi"
    },
    {
        "Id": "E181",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể thay đổi trạng thái của phiếu thu tự động"
    },
    {
        "Id": "E182",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn xin nghỉ nhiều ngày"
    },
    {
        "Id": "E183",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn xin nghỉ buổi sáng"
    },
    {
        "Id": "E184",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn xin nghỉ buổi chiều"
    },
    {
        "Id": "E185",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn checkn"
    },
    {
        "Id": "E186",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn vắng mặt"
    },
    {
        "Id": "E187",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn tăng ca"
    },
    {
        "Id": "E188",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn bù giờ"
    },
    {
        "Id": "E189",
        "Type": 4,
        "Title": "Error",
        "Content": "Đơn xin nghỉ chứa thời gian checkin"
    },
    {
        "Id": "E190",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã có đơn xin nghỉ 1 ngày"
    },
    {
        "Id": "E191",
        "Type": 4,
        "Title": "Error",
        "Content": "Từ dòng phải nhỏ hơn đến dòng"
    },
    {
        "Id": "E192",
        "Type": 4,
        "Title": "Error",
        "Content": "Dữ liệu truyền vào không đúng"
    },
    {
        "Id": "E193",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian nghỉ phải thuộc thời gian làm"
    },
    {
        "Id": "E194",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên kiểu nghỉ đã tồn tại"
    },
    {
        "Id": "E195",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách phiếu thu/chi trống"
    },
    {
        "Id": "E196",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên ca đã tồn tại"
    },
    {
        "Id": "E197",
        "Type": 4,
        "Title": "Error",
        "Content": "Dữ liệu đã được thay đổi, vui lòng kiểm tra lại"
    },
    {
        "Id": "E198",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã checkin checkout tăng ca, không thể hoàn đơn"
    },
    {
        "Id": "E199",
        "Type": 4,
        "Title": "Error",
        "Content": "Có đơn trong quá trình checkin checkout"
    },
    {
        "Id": "E200",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách phiếu công nợ NCC trống"
    },
    {
        "Id": "E201",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách sao kê ngân hàng trống"
    },
    {
        "Id": "E202",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian checkin không được muộn hơn thời gian kết thúc tăng ca trong đơn"
    },
    {
        "Id": "E203",
        "Type": 4,
        "Title": "Error",
        "Content": "Vượt quá số đơn tối đa trong tháng"
    },
    {
        "Id": "E204",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thuộc khoảng thời gian có thể tạo đơn"
    },
    {
        "Id": "E205",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể tạo 2 ca cùng 1 ngày"
    },
    {
        "Id": "E206",
        "Type": 4,
        "Title": "Error",
        "Content": "Ngân hàng không tồn tại"
    },
    {
        "Id": "E207",
        "Type": 4,
        "Title": "Error",
        "Content": "Kế toán đã duyệt, không thể thay đổi trạng thái"
    },
    {
        "Id": "E208",
        "Type": 4,
        "Title": "Error",
        "Content": "Kế toán không duyệt, không thể thay đổi trạng thái"
    },
    {
        "Id": "E209",
        "Type": 4,
        "Title": "Error",
        "Content": "Kí hiệu ca đã tồn tại"
    },
    {
        "Id": "E210",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách sản phẩm chiết khấu trống."
    },
    {
        "Id": "E211",
        "Type": 4,
        "Title": "Error",
        "Content": "Thông tin chiết khấu của sản phẩm không đúng."
    },
    {
        "Id": "E212",
        "Type": 4,
        "Title": "Error",
        "Content": "Tổng tiền chiết khấu cho đơn hàng không đúng."
    },
    {
        "Id": "E213",
        "Type": 4,
        "Title": "Error",
        "Content": "Tổng tiền chiết khấu cho từng sản phẩm không đúng."
    },
    {
        "Id": "E214",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách sản phẩm tặng trống."
    },
    {
        "Id": "E215",
        "Type": 4,
        "Title": "Error",
        "Content": "Số lượng sản phẩm tặng không đúng."
    },
    {
        "Id": "E216",
        "Type": 4,
        "Title": "Error",
        "Content": "Sản phẩm tặng không nằm trong danh sách được tặng."
    },
    {
        "Id": "E217",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy sản phẩm tặng trong hệ thống."
    },
    {
        "Id": "E218",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy sản phẩm tặng trong kho."
    },
    {
        "Id": "E219",
        "Type": 4,
        "Title": "Error",
        "Content": "Số lượng sản phẩm tặng vượt quá số lượng tồn kho."
    },
    {
        "Id": "E220",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy thông tin địa chỉ của khách hàng."
    },
    {
        "Id": "E221",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy phương thức vận chuyển phù hợp cho đơn hàng."
    },
    {
        "Id": "E222",
        "Type": 4,
        "Title": "Error",
        "Content": "Số tiền khách hàng thanh toán phải lớn hơn hoặc bằng tổng tiền của đơn hàng."
    },
    {
        "Id": "E223",
        "Type": 4,
        "Title": "Error",
        "Content": "Tổng tiền thanh toán từ các hình thức thanh toán không bằng tổng tiền khách trả."
    },
    {
        "Id": "E224",
        "Type": 4,
        "Title": "Error",
        "Content": "Số lượng trả lớn hơn số lượng mua (có thể đã trả trước đó), vui lòng kiểm tra lại hoá đơn."
    },
    {
        "Id": "E225",
        "Type": 4,
        "Title": "Error",
        "Content": "Tiền trả lại của sản phẩm không đúng."
    },
    {
        "Id": "E226",
        "Type": 4,
        "Title": "Error",
        "Content": "Số điểm trả lại cho khách hàng không đúng."
    },
    {
        "Id": "E227",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể tạo phiếu vì quá hạn. Vui lòng liên hệ bộ phận kế toán."
    },
    {
        "Id": "E228",
        "Type": 4,
        "Title": "Error",
        "Content": "Danh sách sản phẩm không đúng. Vui lòng kiểm tra lại danh sách!"
    },
    {
        "Id": "E229",
        "Type": 4,
        "Title": "Error",
        "Content": "Đơn hàng đã bị huỷ, không thể thay đổi trạng thái."
    },
    {
        "Id": "E231",
        "Type": 4,
        "Title": "Error",
        "Content": "Không thể thay đổi phương thức thanh toán vì quá hạn. Vui lòng liên hệ bộ phận kế toán."
    },
    {
        "Id": "E232",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy loại chi nhánh phù hợp"
    },
    {
        "Id": "E233",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy Tỉnh/Thành phố phù hợp"
    },
    {
        "Id": "E234",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy Quận/Huyện phù hợp"
    },
    {
        "Id": "E235",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy Xã/Phường phù hợp"
    },
    {
        "Id": "E236",
        "Type": 4,
        "Title": "Error",
        "Content": "Giá trị chiết khấu không phù hợp với thứ hạng hiện tại của khách hàng"
    },
    {
        "Id": "E237",
        "Type": 4,
        "Title": "Error",
        "Content": "Tổng tiền khách hàng thanh toán từ các hình thức khác tiền mặt phải nhỏ hơn tổng tiền thanh toán"
    },
    {
        "Id": "E402",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn cần đăng nhập để thực hiện hành động này"
    },
    {
        "Id": "E403",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn không có quyền để thực hiện hành động này"
    },
    {
        "Id": "E404",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy"
    },
    {
        "Id": "E500",
        "Type": 4,
        "Title": "Error",
        "Content": "Hệ thống bị lỗi, vui lòng thử lại sau."
    },
    {
        "Id": "H001",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã checkIn trong hôm nay"
    },
    {
        "Id": "H002",
        "Type": 4,
        "Title": "Error",
        "Content": "Đã checkOut trong hôm nay"
    },
    {
        "Id": "H003",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn chưa checkIn trong hôm nay, vui lòng checkIn trước khi checkOut"
    },
    {
        "Id": "H004",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian checkIn không được muộn hơn thời gian kết thúc ca"
    },
    {
        "Id": "H005",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian checkOut không được sớm hơn thời gian bắt đầu ca"
    },
    {
        "Id": "H006",
        "Type": 4,
        "Title": "Error",
        "Content": "Ca làm việc đã tồn tại trong hệ thống"
    },
    {
        "Id": "H007",
        "Type": 4,
        "Title": "Error",
        "Content": "Thời gian kết thúc phải lớn hơn thời gian bắt đầu"
    },
    {
        "Id": "H008",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên quyền không được để trống"
    },
    {
        "Id": "H009",
        "Type": 4,
        "Title": "Error",
        "Content": "Id quyền đã tồn tại"
    },
    {
        "Id": "H010",
        "Type": 4,
        "Title": "Error",
        "Content": "Quyền cha không tồn tại"
    },
    {
        "Id": "H011",
        "Type": 4,
        "Title": "Error",
        "Content": "Quyền hạn cha không cấp phép cho chức năng này"
    },
    {
        "Id": "H012",
        "Type": 4,
        "Title": "Error",
        "Content": "Quyền hạn không tồn tại"
    },
    {
        "Id": "H013",
        "Type": 4,
        "Title": "Error",
        "Content": "Tên kiểu nghỉ rỗng"
    },
    {
        "Id": "H014",
        "Type": 4,
        "Title": "Error",
        "Content": "Kiểu nghỉ không tồn tại"
    },
    {
        "Id": "H015",
        "Type": 4,
        "Title": "Error",
        "Content": "Vui lòng sắp xếp ca trước khi checkIn"
    },
    {
        "Id": "H016",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy ca của bạn để checkIn"
    },
    {
        "Id": "H017",
        "Type": 4,
        "Title": "Error",
        "Content": "Hôm nay bạn đã xin nghỉ cả ngày, vui lòng kiểm tra lại"
    },
    {
        "Id": "H018",
        "Type": 4,
        "Title": "Error",
        "Content": "Bạn chưa checkOut trong hôm nay, vui lòng checkOut để tiếp tục checkIn ca mới"
    },
    {
        "Id": "H019",
        "Type": 4,
        "Title": "Error",
        "Content": "Hôm nay là ngày nghỉ, vui lòng kiểm tra lại"
    },
    {
        "Id": "H020",
        "Type": 4,
        "Title": "Error",
        "Content": "Không tìm thấy đơn tăng ca đã duyệt trong ngày của bạn, vui lòng kiểm tra lại"
    },
    {
        "Id": "S001",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã lưu dữ liệu thành công."
    },
    {
        "Id": "S002",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã xóa dữ liệu thành công."
    },
    {
        "Id": "S003",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã tạo file javascript thành công"
    },
    {
        "Id": "S004",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã build lại file chức năng hệ thống thành công"
    },
    {
        "Id": "S005",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã khôi phục mật khẩu thành công"
    },
    {
        "Id": "S006",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã nhắc nhở chuyển khoản cho đơn hàng thành công"
    },
    {
        "Id": "S007",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã xác nhận đơn hàng đã thanh toán thành công"
    },
    {
        "Id": "S008",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã sao chép dữ liệu thành công"
    },
    {
        "Id": "S009",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã gửi thông báo thành công đến khách hàng"
    },
    {
        "Id": "S010",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã gửi đến tất cả khách hàng thành công"
    },
    {
        "Id": "S011",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã xác nhận đơn hàng thành công"
    },
    {
        "Id": "S012",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã xác nhận thanh toán đơn hàng thành công"
    },
    {
        "Id": "S013",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã huỷ đơn hàng thành công"
    },
    {
        "Id": "S014",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã xác nhận hoàn thành đơn hàng thành công"
    },
    {
        "Id": "S015",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã thay đổi trạng thái đơn hàng thành công"
    },
    {
        "Id": "S016",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã import dữ liệu từ file đã chọn thành công"
    },
    {
        "Id": "S017",
        "Type": 2,
        "Title": "Success",
        "Content": "Đã gửi email thành công đến khách hàng theo dõi"
    },
    {
        "Id": "S018",
        "Type": 2,
        "Title": "Success",
        "Content": "Thay đổi trạng thái thành công"
    },
    {
        "Id": "W001",
        "Type": 3,
        "Title": "Warning",
        "Content": "Việc tạo lại file javascript này có thể gây ra một số thay đổi không mong muốn cho hệ thống, bạn có muốn tiếp tục không?"
    },
    {
        "Id": "W002",
        "Type": 3,
        "Title": "Warning",
        "Content": "Việc build lại file chức năng của hệ thống có thể gây ra một số thay đổi không mong muốn, và phải tiến hành build lại toàn bộ project, bạn có muốn tiếp tục không?"
    },
    {
        "Id": "W003",
        "Type": 3,
        "Title": "Warning",
        "Content": "Bạn đã thay đổi link SEO của chương trình khuyến mãi này, nếu tiếp tục lưu tất cả dữ liệu SEO của chương trình này sẽ bị mất, bạn có muốn tiếp tục không ?"
    },
    {
        "Id": "W004",
        "Type": 3,
        "Title": "Warning",
        "Content": "Mã giảm giá của bạn giảm trên 50%, bạn có muốn tiếp tục tạo mã giảm giá này không?"
    },
    {
        "Id": "W005",
        "Type": 3,
        "Title": "Warning",
        "Content": "Dữ liệu sẽ được import từ file đã chọn, vui lòng đảm bảo dữ liệu trong file đống với file mẫu đã được cung cấp. Tiếp tục?"
    }
];
export default Message;
