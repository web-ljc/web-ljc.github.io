# test
## haha
Hooks是React16.8的新特性。可以在不编写class情况下使用state以及其它的React特性Hooks主要是利用闭包来保存状态，使用链表保存一系列Hooks，将链表中的第一个Hook与fiber关联。在Fiber树更新时，就能从Hooks中计算出输出状态或执行相关的副作用。注意事项不要在循环、条件或嵌套函数中调用Hooks只在React函数中调用Hooks