$(function () {
	var isDefualtAdd = 0; //0不选中，1选中
	$('input:radio').click(function () {
		var $radio = $(this);
		if ($radio.data('waschecked') == true) {
			$radio.prop('checked', false);
			$radio.data('waschecked', false);
			$('.free').addClass('active')
			isDefualtAdd = 0;
		} else {
			$radio.prop('checked', true);
			$radio.data('waschecked', true);
			$('.free').removeClass('active')
			isDefualtAdd = 1;
		}
	});

	function bindEvents(id) {
		$("#" + id).on('click', function () {
			var code = $("#" + id);
			// code.attr("class","noClick");
			code.unbind('click');
			var time = 60;
			$(".codeCon").css({
				"background": "#b6b6b6",
				"color": "#010101"
			});
			var set = setInterval(function () {
				code.text(--time + "S重新获取");
			}, 1000);
			setTimeout(function () {
				$("#verificationCode").bind('click', bindEvents('verificationCode'));
				code.text("重新获取验证码");
				$(".codeCon").css({
					"background": "#ec733a",
					"color": "#fff"
				});
				clearInterval(set);
			}, 60000);
		});
	}
	bindEvents('codePass');

	// 返回顶部和按钮定位底部
	setInterval(function () {
		if ($(window).scrollTop() >= 100) {
			$('.goback').show()
		} else(
			$('.goback').hide()
		)
		if ($(window).scrollTop() >= 500) {
			$('.free').addClass('fixed')
		} else(
			$('.free').removeClass('fixed')
		)

	}, 1)

	$('.goback').click(function () {
		$(document).scrollTop(0)
	})


	// 地区选择函数  数据结构
	var picker = new mui.PopPicker({
		layer: 2
	});
	picker.setData([{
			value: '100000',
			text: '请选择',
			children: [{
				value: "100101",
				text: "请选择"
			}]
		},

		{
			value: '110000',
			text: '东城区',
			children: [{
					value: "110101",
					text: "请选择"
				},
				{
					value: "110101",
					text: "四环到五环之间"
				},
				{
					value: "110101",
					text: "五环到六环之间"
				},
				{
					value: "110101",
					text: "六环以外"
				},
				{
					value: "110101",
					text: "西三旗"
				},
				{
					value: "110101",
					text: "西二旗"
				}, {
					value: "110101",
					text: "三环以内"
				},
				{
					value: "110101",
					text: "三环到四环之间"
				}
			],
		},
		{
			value: '120000',
			text: '西城区',
			children: [{
					value: "120101",
					text: "请选择"
				}, {
					value: "120101",
					text: "四环到五环之间"
				},
				{
					value: "120101",
					text: "五环到六环之间"
				},
				{
					value: "120101",
					text: "六环以外"
				},
				{
					value: "120101",
					text: "西三旗"
				},
				{
					value: "120101",
					text: "西二旗"
				}, {
					value: "120101",
					text: "三环以内"
				},
				{
					value: "120101",
					text: "三环到四环之间"
				}
			],
		},
		{
			value: '130000',
			text: '海淀区',
			children: [{
					value: "130101",
					text: "请选择"
				},
				{
					value: "130101",
					text: "四环到五环之间"
				},
				{
					value: "130101",
					text: "五环到六环之间"
				},
				{
					value: "130101",
					text: "六环以外"
				},
				{
					value: "130101",
					text: "西三旗"
				},
				{
					value: "130101",
					text: "西二旗"
				}, {
					value: "130101",
					text: "三环以内"
				},
				{
					value: "130101",
					text: "三环到四环之间"
				}
			],
		},
		{
			value: '140000',
			text: '石景山区',
			children: [{
					value: "140101",
					text: "请选择"
				},
				{
					value: "140101",
					text: "四环到五环之间"
				},
				{
					value: "140101",
					text: "五环到六环之间"
				},
				{
					value: "140101",
					text: "六环以外"
				},
				{
					value: "140101",
					text: "西三旗"
				},
				{
					value: "140101",
					text: "西二旗"
				}, {
					value: "140101",
					text: "三环以内"
				},
				{
					value: "140101",
					text: "三环到四环之间"
				}
			],
		},
		{
			value: '150000',
			text: '朝阳区',
			children: [{
					value: "150101",
					text: "请选择"
				}, {
					value: "150101",
					text: "三环以内"
				},
				{
					value: "150101",
					text: "三环到四环之间"
				},
				{
					value: "150101",
					text: "四环到五环之间"
				},
				{
					value: "150101",
					text: "五环带六环之间"
				},
				{
					value: "150101",
					text: "六环之外"
				}
			],
		},
	])
	var showUserPickerButton = document.getElementById('ipt2');
	showUserPickerButton.addEventListener('tap', function (event) {
		picker.show(function (items) {
			showUserPickerButton.innerText = items[0].text + '/' + items[1].text;
			//返回 false 可以阻止选择框的关闭
			//return false;
		});
	}, false);

	$('.item').click(function () {
		$('#ipt3').text($(this)[0].innerText)
		hideMask()
	})

});