using UnityEngine;

public class DetectZOne : MonoBehaviour
{
    void OnTriggerEnter(Collider other)
    {
        Destroy(other.gameObject);

    }
}
    