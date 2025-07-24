using UnityEngine;

public class MovePlayer : MonoBehaviour
{
    private Animator animator;
    
    void Start()
    {
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        bool isMoving = false;
        
        if (Input.GetKey(KeyCode.W))
        {
            transform.Translate(0, 0, 15 * Time.deltaTime);
            isMoving = true;
        }
        else if (Input.GetKey(KeyCode.S))
        {
            transform.Translate(0, 0, -15 * Time.deltaTime);
            isMoving = true;
        }
        else if (Input.GetKey(KeyCode.D))
        {
            transform.Translate(15 * Time.deltaTime, 0, 0);
            isMoving = true;
        }
        else if (Input.GetKey(KeyCode.A))
        {
            transform.Translate(-15 * Time.deltaTime, 0, 0);
            isMoving = true;
        }
        
        if (animator != null)
        {
            animator.SetBool("is_walking", isMoving);
        }
    }
}