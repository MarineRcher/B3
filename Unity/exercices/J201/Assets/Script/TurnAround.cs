using UnityEngine;

public class turnAround : MonoBehaviour
{
    [SerializeField] private Vector3 mRotation;
    void Update()
    {
        transform.Rotate(0,1,0 * Time.deltaTime);
    }
}
