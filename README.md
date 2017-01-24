# We-MaterialDesign
###1、微信小程序之MaterialDesign-- input组件

  主要通过input输入事件配合css的transform动态改变实现这种效果。
	实际调试过程中，input组件bindinput事件触发后回调的detail对象，
	在模拟器中含有cursor属性，在真机中（测过安卓，ios没测过）却没有该属性，最后选择detail对象中的value属性的值的长度来同步输入的位数。
	bindfocus事件最好不要添加改变css的代码 。
![Markdown](http://p1.bpimg.com/1949/a9f11eb8c3e9d6a1.gif)![Markdown](http://i1.piimg.com/1949/2e36795f7c36bb48.gif) 


###2、微信小程序之MaterialDesign-- ripple&reveal效果

ripple： 水涟漪效果       reveal： 揭露效果
ripple： 主要是两个view的叠加，设置最上层view的border-radius为100%，背景设置半透明。最下层view设置点击事件，并记录点击时的绝对坐标与相对坐标，坐标运算之后，同时动态改变最上层view的top与left，即可实现手指点击哪里，最上层view就会出现在那里。 最后实现涟漪，通过对上层view进行放大动画即可。
reveal：是ripple的变形，减慢动画执行时间，同时保持两层view的背景色动态保持一致即可。

![](http://p1.bpimg.com/567571/3ebc8791315b65b7.gif)
