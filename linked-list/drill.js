function print(head) {
  while (head) {
    console.log(head.data);
    this.head = head.next;
  }
}
