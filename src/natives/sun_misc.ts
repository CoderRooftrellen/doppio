import threading = require('../threading');
import java_object = require('../java_object');
import logging = require('../logging');
import ClassData = require('../ClassData');
import gLong = require('../gLong');
import util = require('../util');
import enums = require('../enums');
import ClassLoader = require('../ClassLoader');
declare var registerNatives: (defs: any) => void;

function unsafe_compare_and_swap(thread: threading.JVMThread, _this: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, expected: any, x: any): boolean {
  var actual = obj.getFieldFromSlot(thread, offset);
  if (actual === expected) {
    obj.setFieldFromSlot(thread, offset, x);
    return true;
  } else {
    return false;
  }
}

class sun_misc_GC {

  public static 'maxObjectInspectionAge()J'(thread: threading.JVMThread): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

}

class sun_misc_MessageUtils {

  public static 'toStderr(Ljava/lang/String;)V'(thread: threading.JVMThread, arg0: java_object.JavaObject): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'toStdout(Ljava/lang/String;)V'(thread: threading.JVMThread, arg0: java_object.JavaObject): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

}

class sun_misc_NativeSignalHandler {

  public static 'handle0(IJ)V'(thread: threading.JVMThread, arg0: number, arg1: gLong): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

}

class sun_misc_Perf {

  public static 'attach(Ljava/lang/String;II)Ljava/nio/ByteBuffer;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject, arg1: number, arg2: number): java_object.JavaObject {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'detach(Ljava/nio/ByteBuffer;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'createLong(Ljava/lang/String;IIJ)Ljava/nio/ByteBuffer;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, name: java_object.JavaObject, variability: number, units: number, value: gLong): void {
    thread.setStatus(enums.ThreadStatus.ASYNC_WAITING);
    thread.getBsCl().initializeClass(thread, 'Ljava/nio/DirectByteBuffer;', (cdata: ClassData.ReferenceClassData) => {
      if (cdata !== null) {
        var buff = new java_object.JavaObject(cdata),
          heap = thread.getThreadPool().getJVM().getHeap(),
          addr = heap.malloc(8);
        thread.runMethod(cdata.methodLookup(thread, '<init>(JI)V'), [buff, gLong.fromNumber(addr), null, 8], (e?, rv?) => {
          if (e) {
            thread.throwException(e);
          } else {
            heap.store_word(addr, value.getLowBits());
            heap.store_word(addr + 4, value.getHighBits());
            thread.asyncReturn(buff);
          }
        });
      }
    });
  }

  public static 'createByteArray(Ljava/lang/String;II[BI)Ljava/nio/ByteBuffer;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject, arg1: number, arg2: number, arg3: java_object.JavaArray, arg4: number): java_object.JavaObject {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'highResCounter()J'(thread: threading.JVMThread, javaThis: java_object.JavaObject): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'highResFrequency()J'(thread: threading.JVMThread, javaThis: java_object.JavaObject): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'registerNatives()V'(thread: threading.JVMThread): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

}

class sun_misc_Signal {

  public static 'findSignal(Ljava/lang/String;)I'(thread: threading.JVMThread, arg0: java_object.JavaObject): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'handle0(IJ)J'(thread: threading.JVMThread, arg0: number, arg1: gLong): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'raise0(I)V'(thread: threading.JVMThread, arg0: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

}

class sun_misc_Unsafe {

  public static 'getInt(Ljava/lang/Object;J)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putInt(Ljava/lang/Object;JI)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    return obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getObject(Ljava/lang/Object;J)Ljava/lang/Object;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): java_object.JavaObject {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putObject(Ljava/lang/Object;JLjava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_obj: java_object.JavaObject): void {
    return obj.setFieldFromSlot(thread, offset, new_obj);
  }

  public static 'getBoolean(Ljava/lang/Object;J)Z'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putBoolean(Ljava/lang/Object;JZ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    return obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getByte(Ljava/lang/Object;J)B'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putByte(Ljava/lang/Object;JB)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getShort(Ljava/lang/Object;J)S'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putShort(Ljava/lang/Object;JS)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getChar(Ljava/lang/Object;J)C'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putChar(Ljava/lang/Object;JC)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    return obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getLong(Ljava/lang/Object;J)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): gLong {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putLong(Ljava/lang/Object;JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, x: gLong): void {
    obj.setFieldFromSlot(thread, offset, x);
  }

  public static 'getFloat(Ljava/lang/Object;J)F'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putFloat(Ljava/lang/Object;JF)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getDouble(Ljava/lang/Object;J)D'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putDouble(Ljava/lang/Object;JD)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getByte(J)B'(thread: threading.JVMThread, javaThis: java_object.JavaObject, address: gLong): number {
    var heap = thread.getThreadPool().getJVM().getHeap();
    return heap.get_signed_byte(address.toNumber());
  }

  public static 'putByte(JB)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getShort(J)S'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'putShort(JS)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getChar(J)C'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'putChar(JC)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getInt(J)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'putInt(JI)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getLong(J)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, address: gLong): gLong {
    var heap = thread.getThreadPool().getJVM().getHeap(),
     addr = address.toNumber();
    return new gLong(heap.get_word(addr), heap.get_word(addr + 4));
  }

  public static 'putLong(JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, address: gLong, value: gLong): void {
    var heap = thread.getThreadPool().getJVM().getHeap(),
      addr = address.toNumber();

    // LE
    heap.store_word(addr, value.getLowBits());
    heap.store_word(addr + 4, value.getHighBits());
  }

  public static 'getFloat(J)F'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'putFloat(JF)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getDouble(J)D'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'putDouble(JD)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: number): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'getAddress(J)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'putAddress(JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: gLong): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'allocateMemory(J)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, size: gLong): gLong {
    var heap = thread.getThreadPool().getJVM().getHeap();
    return gLong.fromNumber(heap.malloc(size.toNumber()));
  }

  public static 'reallocateMemory(JJ)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: gLong, arg1: gLong): gLong {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'setMemory(Ljava/lang/Object;JJB)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, address: gLong, bytes: gLong, value: number): void {
    if (obj === null) {
      // Address is absolute.
      var i: number, addr = address.toNumber(),
        bytesNum: number = bytes.toNumber(),
        heap = thread.getThreadPool().getJVM().getHeap();
      for (i = 0; i < bytesNum; i++) {
        heap.set_signed_byte(addr + i, value);
      }
    } else {
      // I have no idea what the semantics are when the object is specified.
      // I think it means use the object as the starting address... which doesn't
      // make sense for us.
      thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    }
  }

  /**
   * Sets all bytes in a given block of memory to a copy of another
   * block.
   *
   * <p>This method determines each block's base address by means of two parameters,
   * and so it provides (in effect) a <em>double-register</em> addressing mode,
   * as discussed in {@link #getInt(Object,long)}.  When the object reference is null,
   * the offset supplies an absolute base address.
   *
   * <p>The transfers are in coherent (atomic) units of a size determined
   * by the address and length parameters.  If the effective addresses and
   * length are all even modulo 8, the transfer takes place in 'long' units.
   * If the effective addresses and length are (resp.) even modulo 4 or 2,
   * the transfer takes place in units of 'int' or 'short'.
   *
   * @since 1.7
   */
  public static 'copyMemory(Ljava/lang/Object;JLjava/lang/Object;JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, srcBase: java_object.JavaObject, srcOffset: gLong, destBase: java_object.JavaObject, destOffset: gLong, bytes: gLong): void {
    var heap = thread.getThreadPool().getJVM().getHeap(),
      srcAddr = srcOffset.toNumber(),
      destAddr = destOffset.toNumber(),
      length = bytes.toNumber();
    if (srcBase === null && destBase === null) {
      // memcopy semantics w/ srcoffset/destoffset as absolute offsets.
      heap.memcpy(srcAddr, destAddr, length);
    } else if (srcBase === null && destBase !== null) {
      // OK, so... destBase is an array, destOffset is a byte offset from the
      // start of the array. Need to copy data from the heap directly into the array.
      if (util.is_array_type(destBase.cls.getInternalName()) && util.is_primitive_type((<ClassData.ArrayClassData><any>destBase.cls).getComponentClass().getInternalName())) {
        var destArray: java_object.JavaArray = <any> destBase, i: number;
        switch (destArray.cls.getComponentClass().getInternalName()) {
          case 'B':
            for (i = 0; i < length; i++) {
              destArray.array[destAddr + i] = heap.get_byte(srcAddr + i);
            }
            break;
          /*case 'C':
            break;
          case 'D':
            break;
          case 'F':
            break;
          case 'I':
            break;
          case 'J':
            break;
          case 'S':
            break;
          case 'Z':
            break;*/
          default:
            // I have no idea what the appropriate semantics are for this.
            thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
            break;
        }
      } else {
        // I have no idea what the appropriate semantics are for this.
        thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
      }
    } else {
      // I have no idea what the appropriate semantics are for this.
      thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    }
  }

  public static 'freeMemory(J)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, address: gLong): void {
    var heap = thread.getThreadPool().getJVM().getHeap();
    heap.free(address.toNumber());
  }

  public static 'staticFieldOffset(Ljava/lang/reflect/Field;)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, field: java_object.JavaObject): gLong {
    var slot = field.get_field(thread, 'Ljava/lang/reflect/Field;slot');
    return gLong.fromNumber(slot);
  }

  public static 'objectFieldOffset(Ljava/lang/reflect/Field;)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, field: java_object.JavaObject): gLong {
    var slot = field.get_field(thread, 'Ljava/lang/reflect/Field;slot');
    return gLong.fromNumber(slot);
  }

  public static 'staticFieldBase(Ljava/lang/reflect/Field;)Ljava/lang/Object;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, field: java_object.JavaObject): java_object.JavaObject {
    var cls = field.get_field(thread, 'Ljava/lang/reflect/Field;clazz');
    return new java_object.JavaObject(cls.$cls);
  }

  public static 'ensureClassInitialized(Ljava/lang/Class;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, cls: java_object.JavaClassObject): void {
    thread.setStatus(enums.ThreadStatus.ASYNC_WAITING);
    cls.$cls.initialize(thread, (cdata: ClassData.ClassData) => {
      if (cdata != null) {
        thread.asyncReturn();
      }
    }, true);
  }

  public static 'arrayBaseOffset(Ljava/lang/Class;)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaClassObject): number {
    return 0;
  }

  public static 'arrayIndexScale(Ljava/lang/Class;)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaClassObject): number {
    return 1;
  }

  public static 'addressSize()I'(thread: threading.JVMThread, javaThis: java_object.JavaObject): number {
    return 4;
  }

  public static 'pageSize()I'(thread: threading.JVMThread, javaThis: java_object.JavaObject): number {
    return 1024;
  }

  public static 'defineClass(Ljava/lang/String;[BIILjava/lang/ClassLoader;Ljava/security/ProtectionDomain;)Ljava/lang/Class;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, name: java_object.JavaObject, bytes: java_object.JavaArray, offset: number, len: number, loaderObj: ClassLoader.JavaClassLoaderObject, pd: java_object.JavaObject): void {
    var loader = java_object.get_cl_from_jclo(thread, loaderObj);
    if (loader != null) {
      var cdata: ClassData.ClassData = loader.defineClass(thread, util.int_classname(name.jvm2js_str()), util.byteArray2Buffer(bytes.array, offset, len));
      if (cdata !== null) {
        thread.setStatus(enums.ThreadStatus.ASYNC_WAITING);
        // Resolve the class, since we're handing it back to the application
        // and we expect these things to be resolved.
        cdata.resolve(thread, (cdata: ClassData.ClassData) => {
          if (cdata !== null) {
            thread.asyncReturn(cdata.getClassObject(thread));
          }
        });
      }
    }
  }

  public static 'allocateInstance(Ljava/lang/Class;)Ljava/lang/Object;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, jco: java_object.JavaClassObject): any {
    // This can trigger class initialization, so check if the class is
    // initialized.
    var cls = <ClassData.ReferenceClassData> jco.$cls;
    if (cls.isInitialized(thread)) {
      return new java_object.JavaObject(cls);
    } else {
      thread.setStatus(enums.ThreadStatus.ASYNC_WAITING);
      cls.initialize(thread, () => {
        thread.asyncReturn(new java_object.JavaObject(cls));
      });
    }
  }

  public static 'monitorEnter(Ljava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'monitorExit(Ljava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

  public static 'tryMonitorEnter(Ljava/lang/Object;)Z'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'throwException(Ljava/lang/Throwable;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, exception: java_object.JavaObject): void {
    thread.throwException(exception);
  }

  public static 'compareAndSwapObject(Ljava/lang/Object;JLjava/lang/Object;Ljava/lang/Object;)Z': (thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject, arg1: gLong, arg2: java_object.JavaObject, arg3: java_object.JavaObject) => boolean = unsafe_compare_and_swap;
  public static 'compareAndSwapInt(Ljava/lang/Object;JII)Z': (thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject, arg1: gLong, arg2: number, arg3: number) => boolean = unsafe_compare_and_swap;
  public static 'compareAndSwapLong(Ljava/lang/Object;JJJ)Z': (thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaObject, arg1: gLong, arg2: gLong, arg3: gLong) => boolean = unsafe_compare_and_swap;

  public static 'getObjectVolatile(Ljava/lang/Object;J)Ljava/lang/Object;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): java_object.JavaObject {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putObjectVolatile(Ljava/lang/Object;JLjava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: java_object.JavaObject): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getIntVolatile(Ljava/lang/Object;J)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putIntVolatile(Ljava/lang/Object;JI)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getBooleanVolatile(Ljava/lang/Object;J)Z'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putBooleanVolatile(Ljava/lang/Object;JZ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getByteVolatile(Ljava/lang/Object;J)B'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putByteVolatile(Ljava/lang/Object;JB)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getShortVolatile(Ljava/lang/Object;J)S'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putShortVolatile(Ljava/lang/Object;JS)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getCharVolatile(Ljava/lang/Object;J)C'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putCharVolatile(Ljava/lang/Object;JC)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getLongVolatile(Ljava/lang/Object;J)J'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): gLong {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putLongVolatile(Ljava/lang/Object;JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: gLong): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getFloatVolatile(Ljava/lang/Object;J)F'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putFloatVolatile(Ljava/lang/Object;JF)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'getDoubleVolatile(Ljava/lang/Object;J)D'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong): number {
    return obj.getFieldFromSlot(thread, offset);
  }

  public static 'putDoubleVolatile(Ljava/lang/Object;JD)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'putOrderedObject(Ljava/lang/Object;JLjava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_obj: java_object.JavaObject): void {
    obj.setFieldFromSlot(thread, offset, new_obj);
  }

  public static 'putOrderedInt(Ljava/lang/Object;JI)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: number): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  public static 'putOrderedLong(Ljava/lang/Object;JJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, obj: java_object.JavaObject, offset: gLong, new_value: gLong): void {
    obj.setFieldFromSlot(thread, offset, new_value);
  }

  /**
   * Unblock the given thread blocked on park, or, if it is not blocked, cause
   * the subsequent call to park not to block.
   */
  public static 'unpark(Ljava/lang/Object;)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, theThread: threading.JVMThread): void {
    theThread.getThreadPool().unpark(theThread);
  }

  /**
   * Block current thread, returning when a balancing unpark occurs, or a
   * balancing unpark has already occurred, or the thread is interrupted, or,
   * if not absolute and time is not zero, the given time nanoseconds have
   * elapsed, or if absolute, the given deadline in milliseconds since Epoch
   * has passed, or spuriously (i.e., returning for no "reason").
   */
  public static 'park(ZJ)V'(thread: threading.JVMThread, javaThis: java_object.JavaObject, absolute: number, time: gLong): void {
    var timeout = Infinity;
    if (absolute) {
      // Time is an absolute time (milliseconds since Epoch).
      // Calculate the timeout from the current time.
      timeout = time.toNumber() - (new Date()).getTime();
      if (timeout < 0) {
        // Forbid negative timeouts.
        timeout = 0;
      }
    } else {
      // time is in nanoseconds, but we don't have that
      // type of precision
      if (time.toNumber() > 0) {
        timeout = time.toNumber() / 1000000;
      }
    }
    thread.getThreadPool().park(thread);
    // @todo Cancel timeout if thread is unparked.
    if (timeout !== Infinity && thread.getThreadPool().isParked(thread)) {
      setTimeout(() => {
        if (thread.getThreadPool().isParked(thread)) {
          thread.getThreadPool().completelyUnpark(thread);
        }
      }, timeout);
    }
  }

  public static 'getLoadAverage([DI)I'(thread: threading.JVMThread, javaThis: java_object.JavaObject, arg0: java_object.JavaArray, arg1: number): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  /**
   * Detect if the given class may need to be initialized. This is often
   * needed in conjunction with obtaining the static field base of a
   * class.
   * @return false only if a call to {@code ensureClassInitialized} would have no effect
   */
  public static 'shouldBeInitialized(Ljava/lang/Class;)Z'(thread: threading.JVMThread, javaThis: java_object.JavaObject, cls: java_object.JavaClassObject): number {
    return !cls.$cls.isInitialized(thread) ? 1 : 0;
  }

  /**
   * Define a class but do not make it known to the class loader or system dictionary.
   *
   * For each CP entry, the corresponding CP patch must either be null or have
   * the format that matches its tag:
   *
   * * Integer, Long, Float, Double: the corresponding wrapper object type from java.lang
   * * Utf8: a string (must have suitable syntax if used as signature or name)
   * * Class: any java.lang.Class object
   * * String: any object (not just a java.lang.String)
   * * InterfaceMethodRef: (NYI) a method handle to invoke on that call site's arguments
   *
   * @params hostClass context for linkage, access control, protection domain, and class loader
   * @params data      bytes of a class file
   * @params cpPatches where non-null entries exist, they replace corresponding CP entries in data
   */
  public static 'defineAnonymousClass(Ljava/lang/Class;[B[Ljava/lang/Object;)Ljava/lang/Class;'(thread: threading.JVMThread, javaThis: java_object.JavaObject, hostClass: java_object.JavaClassObject, data: java_object.JavaArray, cpPatches: java_object.JavaArray): java_object.JavaClassObject {
    return new ClassData.ReferenceClassData(new Buffer(data.array), hostClass.$cls.getLoader(), cpPatches).getClassObject(thread);
  }
}

class sun_misc_Version {

  public static 'getJvmSpecialVersion()Ljava/lang/String;'(thread: threading.JVMThread): java_object.JavaObject {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getJdkSpecialVersion()Ljava/lang/String;'(thread: threading.JVMThread): java_object.JavaObject {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

  public static 'getJvmVersionInfo()Z'(thread: threading.JVMThread): number {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return 0;
  }

  public static 'getJdkVersionInfo()V'(thread: threading.JVMThread): void {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
  }

}

class sun_misc_VM {

  public static 'initialize()V'(thread: threading.JVMThread): void {
    var vm_cls = <ClassData.ReferenceClassData> thread.getBsCl().getInitializedClass(thread, 'Lsun/misc/VM;');
    // this only applies to Java 7
    if (vm_cls.majorVersion < 51) {
      return;
    }
    // Hack: make an empty savedProps
    var props_cls = <ClassData.ReferenceClassData> thread.getBsCl().getInitializedClass(thread, 'Ljava/util/Properties;');
    var props = new java_object.JavaObject(props_cls);
    var m = props_cls.getMethod('<init>()V');
    thread.setStatus(enums.ThreadStatus.ASYNC_WAITING);
    thread.runMethod(m, [props], (e?, rv?) => {
      if (e) {
        thread.throwException(e);
      } else {
        vm_cls.staticPut(thread, 'savedProps', props);
        thread.asyncReturn();
      }
    });
  }

  /**
   * Returns the first non-null class loader (not counting class loaders
   * of generated reflection implementation classes) up the execution stack,
   * or null if only code from the null class loader is on the stack.
   */
  public static 'latestUserDefinedLoader()Ljava/lang/ClassLoader;'(thread: threading.JVMThread): ClassLoader.JavaClassLoaderObject {
    var stackTrace = thread.getStackTrace(), i: number,
      bsCl = thread.getBsCl(), loader: ClassLoader.ClassLoader;
    for (i = stackTrace.length - 1; i >= 0; i--) {
      loader = stackTrace[i].method.cls.getLoader();
      if (loader !== bsCl) {
        return (<ClassLoader.CustomClassLoader> loader).getLoaderObject();
      }
    }
    return null;
  }

}

class sun_misc_VMSupport {

  public static 'initAgentProperties(Ljava/util/Properties;)Ljava/util/Properties;'(thread: threading.JVMThread, arg0: java_object.JavaObject): java_object.JavaObject {
    thread.throwNewException('Ljava/lang/UnsatisfiedLinkError;', 'Native method not implemented.');
    // Satisfy TypeScript return type.
    return null;
  }

}

registerNatives({
  'sun/misc/GC': sun_misc_GC,
  'sun/misc/MessageUtils': sun_misc_MessageUtils,
  'sun/misc/NativeSignalHandler': sun_misc_NativeSignalHandler,
  'sun/misc/Perf': sun_misc_Perf,
  'sun/misc/Signal': sun_misc_Signal,
  'sun/misc/Unsafe': sun_misc_Unsafe,
  'sun/misc/Version': sun_misc_Version,
  'sun/misc/VM': sun_misc_VM,
  'sun/misc/VMSupport': sun_misc_VMSupport
});
