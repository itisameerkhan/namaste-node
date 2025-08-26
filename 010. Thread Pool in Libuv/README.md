# Thread Pool in Libuv 

There are extra 2 phases in the event loop cycle 

1.  pending callbacks 

2.  idle, prepare 

---

## ⭐ Phases Overview

1. **timers**: this phase executes callbacks scheduled by `setTimeout()` and `setInterval()`.

2. **pending callbacks**: executes I/O callbacks deferred to the next loop iteration.

3. **idle, prepare**: only used internally.

4. **poll**: retrieve new I/O events; execute I/O related callbacks (almost all with the exception of close callbacks, the ones scheduled by timers, and `setImmediate()`); node will block here when appropriate.

5. **check**: `setImmediate()` callbacks are invoked here.
6. **close callbacks**: some close callbacks, e.g. `socket.on('close', ...)`.


> [!NOTE]
> One full cycle of the event loop is called **tick**

---

### ⚡ EVENT LOOP FROM NODE.JS

```
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

### ⚡ EVENT LOOP FROM LIBUV

![DEMO](https://docs.libuv.org/en/v1.x/_images/loop_iteration.png)

    ---

### ⚡ EVENT LOOP WAITS IN POLL PHASE WHEN IDLE 

Here the code,

```c 
 can_sleep =
        uv__queue_empty(&loop->pending_queue) &&
        uv__queue_empty(&loop->idle_handles);
```
