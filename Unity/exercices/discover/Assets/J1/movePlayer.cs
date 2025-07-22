using UnityEngine;

public class MovePlayer : MonoBehaviour
{

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.UpArrow))
        {
            transform.Translate(0, 0, 5 * Time.deltaTime); 
            Debug.Log("Moving forward (Z+)");
        }
        else if (Input.GetKeyDown(KeyCode.DownArrow))
        {
            transform.Translate(0, 0, -5 * Time.deltaTime); 
            Debug.Log("Moving backward (Z-)");
        }
        else if (Input.GetKeyDown(KeyCode.RightArrow))
        {
            transform.Translate(5 * Time.deltaTime, 0, 0);
            Debug.Log("Moving right (X+)");
        }
        else if (Input.GetKeyDown(KeyCode.LeftArrow))
        {
            transform.Translate(-5 * Time.deltaTime, 0, 0);
            Debug.Log("Moving left (X-)");
        }
    }
}