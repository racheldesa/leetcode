/**
 * Java Solution for leetcode problem 876. Middle of the Linked List
 * 
 * Description: 
 * Given the head of a singly linked list, return the middle node of the
 * linked list. 
 * If there are two middle nodes, return the second middle node. 
 * 
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 * 
 * @author racheldesa
 */
class Solution {
    /**
     * @params ListNode head    -   Head node of a singly linked list
     * @return ListNode         -   Middle node of a singly linked list
     */
    public ListNode middleNode(ListNode head) {
        int listLength = 1;
        ListNode currentNode = head; 
        while(currentNode.next != null) {
            listLength++;
            currentNode = currentNode.next;
        }
        // navigate to halfway point
        if (listLength%2 == 1) { // odd length
            currentNode = head;
            for (int i=1;i<=(listLength/2);i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        } else { // even length
            currentNode = head;
            for (int i=1;i<(listLength/2)+1;i++) {
                currentNode = currentNode.next;
            }
            return currentNode;
        }
        
    }
}