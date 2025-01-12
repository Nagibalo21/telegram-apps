# 弹出窗口

负责 Telegram 迷你应用程序 [popup](../../../../platform/popup.md) 的💠[组件](../scopes.md)。

## 检查支持

要检查当前 Telegram 小应用程序版本是否支持弹出窗口，需要使用
`isSupported` 方法：

::: code-group

```ts [Variable]
import { popup } from '@telegram-apps/sdk';

popup.isSupported(); // boolean
```

```ts [Functions]
import { isPopupSupported } from '@telegram-apps/sdk';

isPopupSupported(); // boolean
```

:::

## 打开

要打开弹出窗口，需要调用 `open` 方法，指定弹出窗口的属性：标题、
信息和最多 3 个按钮的列表。

该方法返回一个承诺，点击按钮的标识符将实现该承诺。 在
的情况下，如果用户没有点击任何按钮，该方法将返回 `null`。

调用该方法会更新 `isOpened` 信号属性值。

::: code-group

```ts [Variable]
import { popup } from '@telegram-apps/sdk';

// popup.isOpened() -> false
const promise = popup.open({
  title: 'Hello!',
  message: 'Here is a test message.',
  buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
});
// popup.isOpened() -> true
const buttonId = await promise;
// popup.isOpened() -> false 
```

```ts [Functions]
import { openPopup, isPopupOpened } from '@telegram-apps/sdk';

// isPopupOpened() -> false
const promise = openPopup({
  title: 'Hello!',
  message: 'Here is a test message.',
  buttons: [{ id: 'my-id', type: 'default', text: 'Default text' }],
});
// isPopupOpened() -> true
const buttonId = await promise;
// isPopupOpened() -> false
```

:::
