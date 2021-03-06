---
title: 读书笔记 C++ 动态数组
date: 2021-04-07 22:04:35
description: description
tag: C++
---

普通的`new`和`delete`一次只能分配和释放一个对象，但是如果想要一次性分配含有10个元素的数组该怎么办呢？就得 `new` 10次嘛？那如果需要一次性分配10000个数组的内存呢？就需要动态数组来搞定了。

### new 和数组

可以通过在类型名之后添加一个方括号，并在其中指定要分配的对象的数目。

```cpp
	int *pia = new int[42];
```

也可以使用类型别名，这样可能更加直观一点

```c++
	typedef int arrT[42];
	int *p = new arrT;
	using arrT = int[42];
	int *q = new arrT;
```

甚至可以使用一个返回正整形的函数作为对象数目的参数

```c++
int * ptr = new int[getSize()];
```

**这个函数返回值必须是个整数，但不必是个常量**

#### 动态数组返回指向第一个对象的指针而不是一个数组类型的对象

与普通数组不同，比如像`int num[5]={0,1,2,3,4};`虽然 `num`很多情况下单独使用时也会被编译器替换为指向数组首元素的指针，但是其本身还是数组类型（一种类似引用和指针的复合类型），而上例的`pia`本身就是一个指针，因此不能使用`begin`和`end`标准库函数

#### 初始化动态分配对象的数组

默认情况下，`new`分配的对象都是默认初始化的，也可以通过在其大小之后跟一对()进行值初始化

```c++
// 默认初始化
int * pia = new int[10];	// 10个未定义的 int
int * psa = new string[10];
// 值初始化
int * pia2 = new int[10]();		// 10个初始值为0 int
int * psa = new string[10]();
// C++11 使用元素初始化器进行初始化
int *pia3 = new int[10]{0,1,2,3};

```

#### 动态数组对象数目可以动态分配

```c++
size_t n = get_size();
int * p = new int[n];
for(int *q = p; q != p+n; ++q){...}
```

当n为0时，返回一个合法的非空指针。（`int arr[0]` 报错：不能定义长度为0的数组）









#### 

[未完待续...]

