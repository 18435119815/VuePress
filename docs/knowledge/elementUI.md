# Element-ui

## 项目实践

###  Form表单验证规则


::: details 点击查看
1.  根目录下创建<kbd>rule</kbd>-><kbd> rule.js</kbd>
```
// 验证身份证号码
export function testIdNum(rule, value, callback) {
	const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
	if (!value) {
		return callback(new Error('身份证号码不能为空'))
	} else if (!reg.test(value)) {
		return callback(new Error('身份证号码格式不正确'))
	} else {
		callback()
	}
}
//不能输入中文
export function testData(rule, value, callback) {
	if (/[\u4E00-\u9FA5]/g.test(value)) {
		return callback(new Error('该字段不能包含中文，请修改'))
	} else if (!value) {
		return callback(new Error('请输入内容'))
	} else {
		callback()
	}
}
//只能输入英文和数字
export function testEngNum(rule, value, callback) {
	if (/[^\w+]/g.test(value)) {
		return callback(new Error('该字段只能包含英文,下划线,和数字，请修改'))
	} else if (!value) {
		return callback(new Error('请输入内容'))
	} else {
		callback()
	}
}
//只能输入英文和数字以及 . -
export function testEngNumCir(rule, value, callback) {
	if (/[^\w+\.\-%@#$_]/g.test(value)) {
		return callback(new Error('该字段只能包含英文,下划线, . 和数字，请修改'))
	} else if (!value) {
		return callback(new Error('请输入内容'))
	} else {
		callback()
	}
}

//只能输入英文和数字以及 . -(表达式)
export function testExpression(rule, value, callback) {
	if (/[^\w+\.\-%@#$,+*_/()=]/g.test(value)) {
		return callback(new Error('该字段只能包含英文,下划线, 计算符号和数字，请修改'))
	} else if (!value) {
		return callback(new Error('请输入内容'))
	} else {
		callback()
	}
}


//大于0
export function testNum0(rule, value, callback) {
	if (!Number.isInteger(value)) {
		callback(new Error('请输入数字值'));
	} else {
		if (value <= 0) {
			callback(new Error('必须大于0'));
		} else {
			callback();
		}
	}
}

export default {
	testNum0,
	testEngNum,
	testEngNumCir,
	checkId: [{
		required: true,
		validator: testIdNum,
		trigger: 'blur'
	}],
	checkChina: [{
		required: true,
		validator: testData,
		trigger: 'blur'
	}],
	checkEngNum: [{
		required: true,
		validator: testEngNum,
		trigger: 'blur'
	}],
	checkEngNumCir: [{
		required: true,
		validator: testEngNumCir,
		trigger: 'blur'
	}]
}

```

2.  使用
```
import rule from '@/rule/rule.js'

rules: {
	model_id: [{
	    required: true,
		message: '请输入模型ID',
		trigger: 'blur'
    }, {
		validator: rule.testEngNumCir,
		trigger: 'blur'
    }, {
	    min: 1,
	    max: 30,
	    message: '长度在 1 到 30 个字符',
	    trigger: 'blur'
    }]
}

```
:::
