using UnityEngine;

public class Ball : MonoBehaviour
{
    public GameObject ball;
    void Start()
    {
        Instantiate(ball, 0.24, 3.25, 2.91, Quaternion.identity);
    }
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("ball"))
        {
            Destroy(other.gameObject);
        }
    }

}
