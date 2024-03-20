/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val;}
 * ListNode(int val, ListNode next) {this.val = val; this.next = next;}
 * }
 */

class Solution {
    public ListNode mergeInBetween(ListNode list1, int a, int b, ListNode list2) {
        ListNode currNode = list1;  // head of list1 - Node 0
        ListNode endSection;        // head of end of list

        for (int i=0;i<b+1;i++) {
            currNode = currNode.next;
        }
        endSection = currNode;

        currNode = list1;
        for (int i=0;i<a-1;i++) {     // traverse to before Node a
            currNode = currNode.next;
        }
        currNode.next = list2;      // insert list2 at Node a
        currNode = currNode.next;   // move to Node a (list2 head)
        while (currNode.next != null) { // traverse to end of list2
            currNode = currNode.next;
        }
        currNode.next = endSection;
        return list1;
    }
}