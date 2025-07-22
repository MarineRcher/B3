using UnityEngine;

public class detectKey : MonoBehaviour
{
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space))
        {
            Debug.Log("space key was pressed");
        }
    }
}
