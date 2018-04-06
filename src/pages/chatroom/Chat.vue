<template>
	<div class="contain">
		<div class="top">
			<div class="left-icon" @click="goBack()"></div>
			<span class="title">聊天室</span>
			<div class="right-icon"></div>
		</div>
		<div class="msg-content">
			<div v-for="(msg,index) in MsgList" :key="index">
				<other-msg :msg="msg" :index="index" v-if="msg.userId!=getUserinfo.userId"></other-msg>
				<my-msg :msg="msg" v-else></my-msg>
			</div>
		</div>
		<div class="bottom-input">
			<textarea col="2" v-model="InputMsg"></textarea>
			<div v-show="!InputMsg" class="btn-default">发送</div>
			<div v-show="InputMsg" class="btn-active" @click="submit">发送</div>
		</div>
		<div class="extra-fun">
			<div class="load-pic">
				<input type="file" @change="upload"/>
				<img src="../assets/img/pic-icon.png" alt="pic-icon" width="70%" height="70%"/>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import {mapGetters} from 'vuex'
import io from 'socket.io-client'
import {getItem} from '@/plugin/sessionStorage-plugin.js'
import OtherMsg from '@/components/Msg/OtherMsg'
import MyMsg from '@/components/Msg/MyMsg'
export default{
	data() {
		return {
			MsgList: [],
			socket: null,
			InputMsg: '',
			roomId: '',
			msgDOM: {}
		}
	},
	created() {
		this.InitData()
	},
	mounted() {
		this.msgDOM = document.querySelector('.msg-content')
		this.socket = io('http://localhost:3000')
		// this.socket = io('http://www.chenleiming.com:3000')
		// 进入房间
		const infoObj = {
			userId: this.getUserinfo.userId,
			nickname: this.getUserinfo.nickname,
			roomId: this.roomId
		}
		this.socket.emit('join-room', infoObj)
		this.socket.on('join-room', (data) => {
			console.log(data)
		})
		// 聊天
		this.socket.on('chat-msg', (msg) => {
			this.MsgList.push(msg)
			this.$nextTick(() => {
				this.msgDOM.scrollTop = this.msgDOM.scrollHeight
			})
		})
		// 离开房间
		this.socket.on('leave-room', (data) => {
			console.log('离开房间')
		})
	},
	computed: {
		...mapGetters([
			'getUserinfo'
		])
	},
	methods: {
		async InitData() {
			this.$store.commit('setUserinfo', getItem('userInfo'))
			this.roomId = this.$route.query.room
			// 获取聊天信息
			const res = await this.$store.dispatch('getHistoryChatMsg', {roomId: this.roomId})
			this.MsgList = res.data
			this.$nextTick(() => {
				this.msgDOM.scrollTop = this.msgDOM.scrollHeight
			})
		},
		goBack() {
				// 离开房间
				const infoObj = {
					nickname: this.getUserinfo.nickname,
					roomId: this.roomId
				}
				this.socket.emit('leave-room', infoObj)
				this.$router.go(-1)
		},
		submit() {
			const MsgObj = {
				roomId: this.roomId,
				timeStamp: Date.parse(new Date()),
				userId: this.getUserinfo.userId,
				headPic: this.getUserinfo.headPic,
				nickname: this.getUserinfo.nickname,
				text: this.InputMsg
			}
			this.socket.emit('chat-msg', MsgObj)
			this.InputMsg = ''
		},
		// 上传图片
		async upload() {
			let file = event.target.files[0]
			if (file) {
				let formData = new FormData()
				formData.append('file', file)
				await this.$store.dispatch('upload', formData)
				const reader = new FileReader()
				reader.onload = event => {
					const MsgObj = {
						roomId: this.roomId,
						timeStamp: Date.parse(new Date()),
						userId: this.getUserinfo.userId,
						headPic: this.getUserinfo.headPic,
						nickname: this.getUserinfo.nickname,
						text: this.InputMsg,
						img: event.target.result
					}
					this.socket.emit('chat-msg', MsgObj)
				}
				reader.readAsDataURL(file)
			}
		}
	},
	components: {
		OtherMsg,
		MyMsg
	}
}
</script>
<style lang="scss" scoped>
$style: #12B7F5;
$bg: #F6F6F6;
$white: #FFF;
.contain {
	background: $bg;
	width: 100%;
	height: 100%;
	.top {
		height: 50px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: $style;
		.left-icon {
			width: 35px;
			height: 35px;
			background: url("../assets/img/back.png") no-repeat center / 100%;
		}
		.title {
			font-size: 20px;
			color: $white;
		}
		.right-icon {
			width: 35px;
			height: 35px;
		}
	}
	.msg-content {
		height: calc(100% - 150px);
		overflow-y: scroll;
	}
	.bottom-input {
		position: absolute;
		width: 100%;
		bottom: 50px;
		display: flex;
		justify-content: space-around;
		textarea {
			width: 80%;
			height: 40px;
			line-height: 40px;
			font-size: 20px;
			border: none;
		}
		.btn-default {
			width: 18%;
			height: 40px;
			line-height:40px;
			text-align: center;
			border: 1px solid #ccc;
			border-radius: 5px;
		}
		.btn-active {
			width: 18%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			border-radius: 5px;
			background: $style;
			color: $white;
		}
	}
	.extra-fun {
		position: absolute;
		bottom: 0;
		height: 50px;
		display: flex;
		align-items: center;
		.load-pic {
			position: relative;
			width: 3rem;
			input {
				position: absolute;
				top: 0;
				left: 0;
				display: inline-block;
				width: 100%;
				height: 100%;
				opacity: 0;
			}
		}
	}
}
</style>
